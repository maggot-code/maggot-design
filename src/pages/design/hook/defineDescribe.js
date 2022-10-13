/*
 * @FilePath: \maggot-design\src\pages\design\hook\defineDescribe.js
 * @Author: maggot-code
 * @Date: 2022-10-13 16:06:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 16:09:57
 * @Description:
 */
import { v4 as uuid } from 'uuid';

export function defineDescribe(config) {
    const keyword = uuid();

    return Object.assign({}, config ?? {}, { keyword });
}

export default defineDescribe;
