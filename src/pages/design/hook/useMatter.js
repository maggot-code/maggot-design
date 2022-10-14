/*
 * @FilePath: \maggot-design\src\pages\design\hook\useMatter.js
 * @Author: maggot-code
 * @Date: 2022-10-13 16:57:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-14 10:23:03
 * @Description:
 */
import { v4 as uuid } from 'uuid';
import { nextTick, unref, ref, computed } from 'vue';
import { concat, remove as lodashRemove } from 'lodash';
import { matterHouse } from '../store/Warehouse';

const className = ['design-matter-card-active'];

function matterActive() {
    const index = ref(0);
    function update(value) {
        if (unref(index) === value) return;

        index.value = value;
    }
    // index, item
    function setup(index) {
        update(index);
    }
    function setupClass(idx) {
        return unref(index) === idx ? className : [];
    }

    return {
        index,
        setup,
        update,
        setupClass,
    };
}

function matterContainer() {
    const refs = ref();

    async function toLocation(target) {
        await nextTick();
        unref(refs).scrollTo(0, target.offsetTop);
    }
    function toBottom() {
        toLocation(unref(refs).lastChild);
    }
    function toTop() {
        unref(refs).scrollTo(0, 0);
    }

    return {
        refs,
        toLocation,
        toBottom,
        toTop,
    };
}

export function useMatter(form, select) {
    const { cellSchema, formSchema } = form.template;
    const active = matterActive();
    const container = matterContainer(active);
    const element = computed(() => matterHouse.get(unref(select.value)));

    function append() {
        const target = Object.assign({}, unref(element), { field: uuid() });

        form.schema.setup({
            formSchema: unref(formSchema),
            cellSchema: concat(unref(cellSchema), [target]),
        });
        active.update(unref(cellSchema).length - 1);
        container.toBottom();
    }
    function remove(target) {
        const setupRemove = (item) => item.field !== target.field;

        form.schema.setup({
            formSchema: unref(formSchema),
            cellSchema: lodashRemove(unref(cellSchema), setupRemove),
        });
        active.update(0);
        container.toTop();
    }

    return {
        matterRefs: container.refs,
        form,
        active,
        append,
        remove,
    };
}

export default useMatter;
