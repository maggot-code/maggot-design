/*
 * @FilePath: \maggot-design\src\pages\design\hook\useActive.js
 * @Author: maggot-code
 * @Date: 2022-10-14 10:38:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 14:01:06
 * @Description:
 */
import { inject, computed, unref } from 'vue';
import { isNil } from 'lodash';
import { ActiveSymbolKeyword } from '../shared/context';

export function useActive() {
    const active = inject(ActiveSymbolKeyword);
    const { target } = active;
    const label = computed(() => unref(target).label);
    const name = computed(() => unref(target).schema.componentName);
    const mold = computed(() => unref(target).schema.mold);
    const field = computed(() => unref(target).schema.field);
    const notField = computed(() => isNil(unref(field)));

    return Object.assign({}, active, { label, name, mold, field, notField });
}

export default useActive;
