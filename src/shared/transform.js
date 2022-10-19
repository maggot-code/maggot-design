/*
 * @FilePath: \maggot-design\src\shared\transform.js
 * @Author: maggot-code
 * @Date: 2022-07-27 16:22:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 10:59:37
 * @Description:
 */
import { isNil, isArray, isString, isBoolean, isObjectLike } from 'lodash';

export function isStringEmpty(target) {
    return isString(target) && target.trim().length <= 0;
}

export function toUsabled(target, voidValue, validValue) {
    return isNil(target) ? voidValue : validValue;
}

export function toArray(target) {
    return isArray(target) ? target : [target];
}

export function toString(target, def = '') {
    return isString(target) ? target : def;
}

export function toBoolean(target, def = false) {
    return isBoolean(target) ? target : def;
}

export function toObject(target, def = {}) {
    return isObjectLike(target) ? target : def;
}

export function toArrayEmpty(target) {
    const unusable = !isArray(target) || target.length <= 0;
    const value = unusable ? [] : target;
    return [unusable, value];
}

export function toObjectEmpty(target) {
    const unusable = !isObjectLike(target) || Object.keys(target).length <= 0;
    const value = unusable ? {} : target;
    return [unusable, value];
}
