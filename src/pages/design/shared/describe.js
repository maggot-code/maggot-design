/*
 * @FilePath: \maggot-design\src\pages\design\shared\describe.js
 * @Author: maggot-code
 * @Date: 2022-10-13 14:00:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 14:55:26
 * @Description:
 */
import { v4 as uuid } from 'uuid';

export function setupSchema(config) {
    const field = uuid();
    return Object.assign({}, { field }, config);
}

export function setupDescribe(config) {
    return Object.assign({}, config, {
        id: uuid(),
    });
}

export default setupDescribe;
