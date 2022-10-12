/*
 * @FilePath: \arcgismap\src\shared\utils.js
 * @Author: maggot-code
 * @Date: 2022-08-17 13:37:40
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-17 13:40:37
 * @Description:
 */
import { isNil } from 'lodash';
import { toArray } from './transform';

export function extractGatherAttrs(gather, attrName) {
    return toArray(gather)
        .filter((item) => !isNil(item[attrName]))
        .map((item) => item[attrName]);
}
