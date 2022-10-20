/*
 * @FilePath: \maggot-design\src\pages\design\shared\enhanceForm.js
 * @Author: maggot-code
 * @Date: 2022-10-19 14:37:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-20 13:10:52
 * @Description:
 */
import { unref } from 'vue';
import { debounce, concat } from 'lodash';
import { v4 as uuid } from 'uuid';

function equal(schema) {
    return (item) => item.field === schema.field;
}

function unequal(schema) {
    return (item) => item.field !== schema.field;
}

export function enhanceForm(form) {
    function update(rawSchema) {
        const index = unref(form.schema.cellSchema).findIndex(equal(rawSchema));
        const [_, data] = remove(rawSchema);
        data.splice(index, 0, rawSchema);
        form.schema.cell.setup(data);
        return [data.length - 1, data];
    }

    function append(rawSchema) {
        const field = rawSchema?.field ?? uuid();
        const schema = Object.assign({}, rawSchema, { field });
        const data = concat(unref(form.schema.cellSchema), [schema]);
        form.schema.cell.setup(data);

        return [data.length - 1, data];
    }

    function insert(rawSchema) {
        const field = rawSchema?.field ?? uuid();
        const index = unref(form.schema.cellSchema).findIndex(equal(rawSchema));
        const [_, data] = remove(rawSchema);
        data.splice(index, 0, Object.assign({}, rawSchema, { field }));
        form.schema.cell.setup(data);
        return [data.length - 1, data];
    }

    function remove(rawSchema) {
        const data = unref(form.schema.cellSchema).filter(unequal(rawSchema));
        form.schema.cell.setup(data);

        return [data.length - 1, data];
    }

    return Object.assign({}, form, {
        update: debounce(update, 240),
        append,
        insert,
        remove,
    });
}

export default enhanceForm;
