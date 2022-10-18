/*
 * @FilePath: \maggot-design\src\pages\design\shared\utils.js
 * @Author: maggot-code
 * @Date: 2022-10-18 15:55:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-18 16:51:21
 * @Description:
 */
import { isString, isArray } from 'lodash';
export function map(target, func, data = []) {
    for (const key in target) {
        const result = func(target[key], key, target);
        if (!isArray(result)) {
            data.push(result);
        } else {
            const [state, res] = result;
            state && data.push(res);
        }
    }

    return data;
}
export function mapObject(target, func) {
    const data = {};
    for (const key in target) {
        const result = func(target[key], key, target);
        if (!isArray(result)) {
            data[key] = result;
        } else {
            const [state, res] = result;
            if (state) {
                data[key] = res;
            }
        }
    }

    return data;
}

export const isStringEmpty = (value) =>
    isString(value) && value.trim().length <= 0;
