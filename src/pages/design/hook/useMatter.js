/*
 * @FilePath: \maggot-design\src\pages\design\hook\useMatter.js
 * @Author: maggot-code
 * @Date: 2022-10-13 09:54:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 09:56:06
 * @Description:
 */
import { inject } from 'vue';
import { MatterSymbolName } from '../shared/context';

export function useMatter() {
    inject(MatterSymbolName);

    return {};
}

export default useMatter;
