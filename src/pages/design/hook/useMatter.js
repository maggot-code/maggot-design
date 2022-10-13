/*
 * @FilePath: \maggot-design\src\pages\design\hook\useMatter.js
 * @Author: maggot-code
 * @Date: 2022-10-13 09:54:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 14:28:14
 * @Description:
 */
import { inject, ref, unref, computed } from 'vue';
import { MatterSymbolName } from '../shared/context';

function setupSelect(matter) {
    const [{ id: defautValue }] = matter.select;
    const value = ref(defautValue);
    const element = computed(() => {
        const bind = matter.select.find(({ id }) => id === unref(value));
        return matter.get(bind);
    });

    return {
        value,
        element,
        options: matter.select,
    };
}

export function useMatter() {
    const matter = inject(MatterSymbolName);
    const select = setupSelect(matter);

    return { matter, select };
}

export default useMatter;
