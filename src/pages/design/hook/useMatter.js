/*
 * @FilePath: \maggot-design\src\pages\design\hook\useMatter.js
 * @Author: maggot-code
 * @Date: 2022-10-13 16:57:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 18:14:33
 * @Description:
 */
import { v4 as uuid } from 'uuid';
import { unref, ref, computed } from 'vue';
import { concat, remove as lodashRemove } from 'lodash';
import { matterHouse } from '../store/Warehouse';

const className = ['design-matter-card-active'];

export function useMatter(form, select) {
    const { cellSchema, formSchema } = form.template;
    const element = computed(() => {
        return matterHouse.get(unref(select.value));
    });
    const index = ref(0);
    const mark = computed(() => {
        return {};
    });
    function setupIndex(value) {
        if (unref(index) === value) return;

        index.value = value;
    }
    function active(item, idx) {
        setupIndex(idx);
    }
    function activeClassname(idx) {
        return unref(index) === idx ? className : [];
    }
    function append() {
        const target = Object.assign({}, unref(element), { field: uuid() });
        form.schema.setup({
            formSchema: unref(formSchema),
            cellSchema: concat(unref(cellSchema), [target]),
        });
        setupIndex(unref(cellSchema).length - 1);
    }
    function remove(target) {
        const schema = lodashRemove(unref(cellSchema), (item) => {
            return item.field !== target.field;
        });

        setupIndex(0);
        form.schema.setup({
            formSchema: unref(formSchema),
            cellSchema: schema,
        });
    }

    return {
        activeClassname,
        form,
        element,
        index,
        mark,
        active,
        append,
        remove,
    };
}

export default useMatter;
