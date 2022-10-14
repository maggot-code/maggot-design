/*
 * @FilePath: \maggot-design\src\pages\design\hook\defineSetter.js
 * @Author: maggot-code
 * @Date: 2022-10-14 16:19:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-14 17:59:48
 * @Description:
 */
import { provide, watchEffect, unref, ref, shallowRef, computed } from 'vue';
import { matterHouse } from '../shared/warehouse';
import {
    SetterBasicSymbolKeyword,
    SetterHighSymbolKeyword,
    SetterDriveSymbolKeyword,
} from '../shared/context';

function pickMatter(name) {
    if (!matterHouse.has(name)) {
        return {
            mold: 'default',
            componentNamme: 'mg-unknow',
        };
    }

    return matterHouse.get(name);
}

function defineSetterMold(form, active) {
    const { mold } = pickMatter(unref(active.name));
    console.log(mold);

    watchEffect(() => {
        console.log(pickMatter(unref(active.name)));
    });
    return {};
}

export function defineSetter(form, active) {
    const mold = defineSetterMold(form, active);
    const basic = { mold };
    const high = {};
    const drive = {};

    provide(SetterBasicSymbolKeyword, basic);
    provide(SetterHighSymbolKeyword, high);
    provide(SetterDriveSymbolKeyword, drive);
    return { basic, high, drive };
}

export default defineSetter;
