/*
 * @FilePath: \maggot-design\src\pages\design\hook\defineMatter.js
 * @Author: maggot-code
 * @Date: 2022-10-13 09:58:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 11:28:13
 * @Description:
 */
import { provide } from 'vue';
import { MatterSymbolName } from '../shared/context';

export function defineMatter(store) {
    provide(MatterSymbolName, {
        store,
    });

    return {};
}

export default defineMatter;
