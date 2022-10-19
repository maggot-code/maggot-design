/*
 * @FilePath: \maggot-design\src\pages\design\hooks\control\useIndexes.js
 * @Author: maggot-code
 * @Date: 2022-10-19 13:28:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 14:58:29
 * @Description:
 */
import { ref, unref } from 'vue';

export function useIndexes() {
    const value = ref(0);
    function setup(index) {
        if (unref(index) === value) return;

        value.value = index <= 0 ? 0 : index;
    }
    function toClassName(className) {
        return (index) => {
            return unref(value) === index ? className : [];
        };
    }

    return { value, setup, toClassName };
}

export default useIndexes;
