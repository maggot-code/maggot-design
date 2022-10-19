/*
 * @FilePath: \maggot-design\src\pages\design\hooks\control\useActive.js
 * @Author: maggot-code
 * @Date: 2022-10-19 13:35:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 15:27:37
 * @Description:
 */
import { unref, computed } from 'vue';

export function useActive(control, indexes) {
    const { preview } = control;
    const template = computed(() => {
        return unref(preview.schema.cellSchema)[unref(indexes.value)];
    });

    return { template };
}

export default useActive;
