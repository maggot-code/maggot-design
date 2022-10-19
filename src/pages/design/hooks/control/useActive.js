/*
 * @FilePath: \maggot-design\src\pages\design\hooks\control\useActive.js
 * @Author: maggot-code
 * @Date: 2022-10-19 13:35:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 13:41:36
 * @Description:
 */
import { unref, computed } from 'vue';

export function useActive(control, indexes) {
    const { preview } = control;
    const value = computed(() => {
        return unref(preview.schema.cellSchema)[unref(indexes.value)];
    });

    return { value };
}

export default useActive;
