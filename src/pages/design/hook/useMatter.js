/*
 * @FilePath: \maggot-design\src\pages\design\hook\useMatter.js
 * @Author: maggot-code
 * @Date: 2022-10-13 16:57:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 17:31:11
 * @Description:
 */
import { v4 as uuid } from 'uuid';
import { unref, computed } from 'vue';
import { concat } from 'lodash';
import { matterHouse } from '../store/Warehouse';

export function useMatter(form, select) {
    console.log(form);
    const element = computed(() => {
        return matterHouse.get(unref(select.value));
    });

    function append() {
        const { cellSchema, formSchema } = form.template;
        const target = Object.assign({}, unref(element), { field: uuid() });
        form.schema.setup({
            formSchema: unref(formSchema),
            cellSchema: concat(unref(cellSchema), [target]),
        });
    }

    return {
        form,
        element,
        append,
    };
}

export default useMatter;
