/*
 * @FilePath: \maggot-design\src\shared\utils.js
 * @Author: maggot-code
 * @Date: 2022-08-17 13:37:40
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 11:32:53
 * @Description:
 */
import { isNil, isArray, isObjectLike } from 'lodash';
import { toUsabled, toArray } from './transform';

export function extractGatherAttrs(gather, attrName) {
    return toArray(gather)
        .filter((item) => !isNil(item[attrName]))
        .map((item) => item[attrName]);
}

export function mapArray(target, func) {
    const data = [];
    if (isArray(target)) {
        target.forEach((item, index) => {
            const [value, usable] = func(item, index, target);
            toUsabled(usable, true, usable) && data.push(value);
        });
        return data;
    }

    if (isObjectLike(target)) {
        for (const key in target) {
            const [value, usable] = func(target[key], key, target);
            toUsabled(usable, true, usable) && data.push(value);
        }
        return data;
    }

    return target;
}

export function mapObject(target, func) {
    const data = {};
    if (isArray(target)) {
        target.forEach((item, index) => {
            const [key, value, usable] = func(item, index, target);
            if (toUsabled(usable, true, usable)) data[key] = value;
        });
        return data;
    }

    if (isObjectLike(target)) {
        for (const key in target) {
            const [value, usable] = func(target[key], key, target);
            if (toUsabled(usable, true, usable)) data[key] = value;
        }
        return data;
    }

    return target;
}
