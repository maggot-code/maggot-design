/*
 * @FilePath: \maggot-design\src\pages\design\hook\defineSetter.js
 * @Author: maggot-code
 * @Date: 2022-10-14 16:19:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 10:53:27
 * @Description:
 */
import { provide } from 'vue';
import {
    SetterSymbolKeyword,
    SetterBasicSymbolKeyword,
    SetterHighSymbolKeyword,
    SetterDriveSymbolKeyword,
} from '../shared/context';

export function defineSetter() {
    const basic = {};
    const high = {};
    const drive = {};

    provide(SetterSymbolKeyword, {});
    provide(SetterBasicSymbolKeyword, basic);
    provide(SetterHighSymbolKeyword, high);
    provide(SetterDriveSymbolKeyword, drive);
    return { basic, high, drive };
}

export default defineSetter;
