/*
 * @FilePath: \maggot-design\src\pages\design\hooks\control\enhanceForm.js
 * @Author: maggot-code
 * @Date: 2022-10-19 14:37:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 15:09:19
 * @Description:
 */
import { unref } from 'vue';
import { throttle, concat } from 'lodash';
import { v4 as uuid } from 'uuid';

function equal(schema) {
    return (item) => item.field === schema.field;
}

function unequal(schema) {
    return (item) => item.field !== schema.field;
}

export function enhanceForm(form) {
    function update(schema) {
        const oldSchema = unref(form.schema.cellSchema).find(equal(schema));
        console.log(oldSchema);
    }

    function append(rawSchema) {
        const field = rawSchema?.field ?? uuid();
        const schema = Object.assign({}, rawSchema, { field });
        const data = concat(unref(form.schema.cellSchema), [schema]);
        form.schema.cell.setup(data);

        return [data.length - 1, data];
    }

    function remove(rawSchema) {
        const data = unref(form.schema.cellSchema).filter(unequal(rawSchema));
        form.schema.cell.setup(data);

        return [data.length - 1, data];
    }

    return Object.assign({}, form, {
        update: throttle(update, 120),
        append,
        remove,
    });
}

export default enhanceForm;
