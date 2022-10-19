/*
 * @FilePath: \maggot-design\src\pages\design\hook\useForm.js
 * @Author: maggot-code
 * @Date: 2022-10-17 11:27:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 15:37:19
 * @Description:
 */
import { inject, unref } from 'vue';
import { cloneDeep, throttle } from 'lodash';
import { FormSymbolKeyword } from '../shared/context';

export function useForm() {
    const form = inject(FormSymbolKeyword);
    const setupCell = throttle(form.schema.cell.setup, 120);

    function setupCellSchema(handler) {
        const schema = unref(form.schema.cellSchema).map(
            (item, index, data) => {
                const [update, result] = handler(item, index, data);
                return update ? cloneDeep(result) : item;
            }
        );
        setupCell(schema);
        return schema;
    }

    function setupCellField(field, value) {
        return setupCellSchema((item) => {
            const update = item.field === unref(field);
            const result = update
                ? Object.assign({}, item, { field: value })
                : item;
            return [update, result];
        });
    }

    return Object.assign({}, form, { setupCellSchema, setupCellField });
}

export default useForm;
