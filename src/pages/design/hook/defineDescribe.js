/*
 * @FilePath: \maggot-design\src\pages\design\hook\defineDescribe.js
 * @Author: maggot-code
 * @Date: 2022-10-13 16:06:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-18 15:55:38
 * @Description:
 */
import { map } from '../shared/utils';
const Describe_Kind = '__describe__';

function setupMold({ mold, uiSchema }) {
    return { label: uiSchema.label, value: mold };
}

export function isDescribe(target) {
    return target?.kind && target.kind === Describe_Kind;
}

export function defineDescribe(label, schema, mold) {
    const setterMold = map(mold, setupMold);

    function switchMold(value) {
        return mold[value] ?? schema;
    }

    return {
        kind: Describe_Kind,
        schema,
        label,
        setterMold,
        switchMold,
    };
}

export default defineDescribe;
