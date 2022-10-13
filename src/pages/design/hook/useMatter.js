/*
 * @FilePath: \maggot-design\src\pages\design\hook\useMatter.js
 * @Author: maggot-code
 * @Date: 2022-10-13 16:57:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 17:43:49
 * @Description:
 */
import { v4 as uuid } from 'uuid';
import { unref, computed } from 'vue';
import { concat, remove as lodashRemove } from 'lodash';
import { matterHouse } from '../store/Warehouse';

export function useMatter(form, select) {
    const { cellSchema, formSchema } = form.template;
    const element = computed(() => {
        return matterHouse.get(unref(select.value));
    });

    function append() {
        const target = Object.assign({}, unref(element), { field: uuid() });
        form.schema.setup({
            formSchema: unref(formSchema),
            cellSchema: concat(unref(cellSchema), [target]),
        });
    }
    function remove(target) {
        const schema = lodashRemove(unref(cellSchema), (item) => {
            return item.field !== target.field;
        });

        form.schema.setup({
            formSchema: unref(formSchema),
            cellSchema: schema,
        });
    }

    return {
        form,
        element,
        append,
        remove,
    };
}

export default useMatter;
