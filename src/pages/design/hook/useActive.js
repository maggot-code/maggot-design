/*
 * @FilePath: \maggot-design\src\pages\design\hook\useActive.js
 * @Author: maggot-code
 * @Date: 2022-10-14 10:38:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 11:10:40
 * @Description:
 */
import { inject, computed, unref } from 'vue';
import { ActiveSymbolKeyword } from '../shared/context';

export function useActive() {
    const { target } = inject(ActiveSymbolKeyword);
    const label = computed(() => unref(target).label);
    const name = computed(() => unref(target).schema.componentName);
    const mold = computed(() => unref(target).schema.mold);

    return { target, label, name, mold };
}

export default useActive;
