/*
 * @FilePath: \maggot-design\src\pages\design\hooks\matter\defineMatter.js
 * @Author: maggot-code
 * @Date: 2022-10-19 09:55:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 13:12:43
 * @Description:
 */
import { ref, unref } from 'vue';
import { useStore } from './useStore';

export function useSelect({ matter }) {
    const options = matter.map((item) => ({
        value: item.namespace,
        label: item.label,
    }));
    const [first] = options;
    const value = ref(first.value);

    function setup(val) {
        if (unref(value) === val) return;

        value.value = val;
    }

    return { options, value, setup };
}

export function defineMatter() {
    const store = useStore();
    const select = useSelect(store);

    return {
        store,
        select,
    };
}

export default defineMatter;
