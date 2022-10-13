/*
 * @FilePath: \maggot-design\src\pages\design\hook\useSetter.js
 * @Author: maggot-code
 * @Date: 2022-10-13 09:54:51
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 09:55:04
 * @Description:
 */
import { inject } from 'vue';
import { SetterSymbolName } from '../shared/context';

export function useSetter() {
    inject(SetterSymbolName);

    return {};
}

export default useSetter;
