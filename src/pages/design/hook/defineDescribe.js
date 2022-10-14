/*
 * @FilePath: \maggot-design\src\pages\design\hook\defineDescribe.js
 * @Author: maggot-code
 * @Date: 2022-10-13 16:06:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-14 11:11:04
 * @Description:
 */
import { v4 as uuid } from 'uuid';

export function toSchema() {
    return {};
}

export function defineDescribe(config) {
    const keyword = uuid();
    const defineSchema = config.defineSchema ?? toSchema;

    return Object.assign({}, config ?? {}, { keyword, defineSchema });
}

export default defineDescribe;
