/*
 * @FilePath: \maggot-design\src\pages\design\hooks\control\useIndexes.js
 * @Author: maggot-code
 * @Date: 2022-10-19 13:28:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-20 16:10:20
 * @Description:
 */
import { ref, unref } from 'vue';

export function useIndexes() {
    const value = ref(0);
    function setup(index) {
        if (unref(index) === value) return;

        value.value = index <= 0 ? 0 : index;
    }
    function toIndex(equal, unequal) {
        return (index) => {
            return unref(value) === index ? equal : unequal;
        };
    }

    return { value, setup, toIndex };
}

export default useIndexes;
