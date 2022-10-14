/*
 * @FilePath: \maggot-design\src\pages\design\hook\useActive.js
 * @Author: maggot-code
 * @Date: 2022-10-14 10:38:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-14 10:45:47
 * @Description:
 */
import { inject } from 'vue';
import { ActiveSymbolKeyword } from '../shared/context';
export function useActive() {
    return inject(ActiveSymbolKeyword);
}

export default useActive;
