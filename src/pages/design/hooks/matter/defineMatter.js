/*
 * @FilePath: \maggot-design\src\pages\design\hooks\matter\defineMatter.js
 * @Author: maggot-code
 * @Date: 2022-10-19 09:55:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-20 14:24:46
 * @Description:
 */
import { nextTick, ref, unref } from 'vue';
import { mapArray } from '@/shared/utils';
import { useStore } from './useStore';
import { UnknowNamespace } from '../../shared/context';

function filterMatter(item) {
    const { namespace: value, label } = item;
    return [{ value, label }, value !== UnknowNamespace];
}

export function useSelect({ matter }) {
    const options = mapArray(matter, filterMatter);
    const [first] = options;
    const value = ref(first.value);

    function setup(val) {
        if (unref(value) === val) return;

        value.value = val;
    }

    return { options, value, setup };
}

export function useContainer() {
    const refs = ref(null);

    async function toLocation(target) {
        await nextTick();
        unref(refs).scrollTo(0, target?.offsetTop ?? 0);
    }

    function toBottom() {
        toLocation(unref(refs).lastElementChild);
    }

    return {
        refs,
        toLocation,
        toBottom,
        toTop: toLocation,
    };
}

export function defineMatter() {
    const store = useStore();
    const select = useSelect(store);
    const container = useContainer();

    return {
        store,
        select,
        container,
    };
}

export default defineMatter;
