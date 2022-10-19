/*
 * @FilePath: \maggot-design\src\pages\design\hook\useMatter.js
 * @Author: maggot-code
 * @Date: 2022-10-13 16:57:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 13:33:27
 * @Description:
 */
import { v4 as uuid } from 'uuid';
import { nextTick, unref, ref, computed } from 'vue';
import { concat, remove as lodashRemove } from 'lodash';
import { matterHouse } from '../shared/warehouse';

const className = ['design-matter-card-active'];

function matterActive(active) {
    // index, item
    function click(index) {
        active.setup(index);
    }
    function setupClass(idx) {
        return unref(active.index) === idx ? className : [];
    }

    return {
        click,
        setupClass,
    };
}

function matterContainer() {
    const refs = ref();

    async function toLocation(target) {
        await nextTick();
        unref(refs).scrollTo(0, target?.offsetTop ?? 0);
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

export function useMatter(form, select, active) {
    const { cellSchema, formSchema } = form.template;
    const { click, setupClass } = matterActive(active);
    const container = matterContainer();
    const element = computed(() => matterHouse.get(unref(select.value)));

    function append() {
        const target = Object.assign({}, unref(element).schema, {
            field: uuid(),
        });

        form.schema.setup({
            formSchema: unref(formSchema),
            cellSchema: concat(unref(cellSchema), [target]),
        });
        active.setup(unref(cellSchema).length - 1);
        container.toBottom();
    }
    function remove(target) {
        const setupRemove = (item) => item.field !== target.field;

        form.schema.setup({
            formSchema: unref(formSchema),
            cellSchema: lodashRemove(unref(cellSchema), setupRemove),
        });
        active.setup(0);
        container.toTop();
    }

    return {
        matterRefs: container.refs,
        form,
        click,
        setupClass,
        append,
        remove,
    };
}

export default useMatter;
