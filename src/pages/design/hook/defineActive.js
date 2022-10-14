/*
 * @FilePath: \maggot-design\src\pages\design\hook\defineActive.js
 * @Author: maggot-code
 * @Date: 2022-10-14 10:39:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-14 10:58:46
 * @Description:
 */
import { unref, ref, computed } from 'vue';

export function defineActive(form) {
    const { cellSchema } = form.template;
    const index = ref(0);
    const target = computed(() => {
        return unref(cellSchema).at(unref(index));
    });

    function setup(value) {
        if (unref(index) === value) return;

        index.value = value;
    }

    return {
        index,
        target,
        setup,
    };
}

export default defineActive;
