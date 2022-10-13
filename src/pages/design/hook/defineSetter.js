/*
 * @FilePath: \maggot-design\src\pages\design\hook\defineSetter.js
 * @Author: maggot-code
 * @Date: 2022-10-13 09:58:28
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 10:00:10
 * @Description:
 */
import { provide } from 'vue';
import { SetterSymbolName } from '../shared/context';

export function defineSetter() {
    provide(SetterSymbolName, {});

    return {};
}

export default defineSetter;
