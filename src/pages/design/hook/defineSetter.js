/*
 * @FilePath: \maggot-design\src\pages\design\hook\defineSetter.js
 * @Author: maggot-code
 * @Date: 2022-10-14 16:19:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-14 16:27:49
 * @Description:
 */
import { provide } from 'vue';
import {
    SetterBasicSymbolKeyword,
    SetterHighSymbolKeyword,
    SetterDriveSymbolKeyword,
} from '../shared/context';

export function defineSetter(active) {
    console.log(active);
    const basic = {};
    const high = {};
    const drive = {};

    provide(SetterBasicSymbolKeyword, basic);
    provide(SetterHighSymbolKeyword, high);
    provide(SetterDriveSymbolKeyword, drive);
    return { basic, high, drive };
}

export default defineSetter;
