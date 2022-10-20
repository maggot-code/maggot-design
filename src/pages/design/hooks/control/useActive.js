/*
 * @FilePath: \maggot-design\src\pages\design\hooks\control\useActive.js
 * @Author: maggot-code
 * @Date: 2022-10-19 13:35:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-20 13:31:39
 * @Description:
 */
import { unref, computed } from 'vue';
import { isNil } from 'lodash';

export function useActive(control, indexes) {
    const { preview } = control;
    const template = computed(() => {
        return unref(preview.schema.cellSchema)[unref(indexes.value)];
    });
    const unusable = computed(() => isNil(unref(template)));
    const usable = computed(() => !isNil(unref(template)));
    const componentName = computed(() => unref(template).componentName);
    const field = computed(() => unref(template).field);
    const mold = computed(() => unref(template).mold);

    return {
        unusable,
        usable,
        template,
        componentName,
        field,
        mold,
    };
}

export default useActive;
