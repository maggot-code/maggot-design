/*
 * @FilePath: \maggot-design\src\pages\design2\hook\useSchema.js
 * @Author: maggot-code
 * @Date: 2022-10-19 09:14:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 09:16:40
 * @Description:
 */
/*
 * @FilePath: \maggot-design\src\pages\design\hook\useSchema.js
 * @Author: maggot-code
 * @Date: 2022-10-18 15:11:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-18 16:55:46
 * @Description:
 */
import { nextTick, watch, unref } from 'vue';
import { isNil, throttle } from 'lodash';
import { useForm } from './useForm';
import { map, mapObject, isStringEmpty } from '../shared/utils';
import SchemaGraph from '../shared/schema';

function setupUISchema(value, key) {
    const data = SchemaGraph[key];
    if (isNil(data)) return [false];

    if (!isStringEmpty(value)) data.value = value;

    return data;
}
function filterUISchema(value) {
    return [!isStringEmpty(value), value];
}

export function useSchema(active, form) {
    const preview = useForm();
    const { field, mold, notField, target } = active;
    const setupCell = throttle(form.schema.cell.setup, 120);

    async function setupPreview() {
        await nextTick();
        const [_, data] = await form.setupData(false);

        const uiSchema = mapObject(data, filterUISchema);
        const schema = Object.assign({}, unref(target).schema, { uiSchema });
        preview.setupCellSchema((item) => {
            const update = item.field === unref(field);

            if (!update) return [update];

            return [update, schema];
        });
    }

    watch([field, mold], () => {
        if (unref(notField)) return;

        setupCell(map(unref(target).schema.uiSchema, setupUISchema));
        setupPreview();
    });

    return { setupPreview };
}

export default useSchema;
