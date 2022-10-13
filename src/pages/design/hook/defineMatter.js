/*
 * @FilePath: \maggot-design\src\pages\design\hook\defineMatter.js
 * @Author: maggot-code
 * @Date: 2022-10-13 09:58:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 09:59:38
 * @Description:
 */
import { provide } from 'vue';
import { MatterSymbolName } from '../shared/context';

export function defineMatter() {
    provide(MatterSymbolName, {});

    return {};
}

export default defineMatter;
