/*
 * @FilePath: \maggot-design\src\pages\design\hooks\matter\defineMatter.js
 * @Author: maggot-code
 * @Date: 2022-10-19 09:55:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 10:10:37
 * @Description:
 */
import { useStore } from './useStore';

export function defineMatter() {
    const store = useStore();
    console.log(store);

    return {};
}

export default defineMatter;
