/*
 * @FilePath: \maggot-design\src\pages\design\hooks\setter\defineSetter.js
 * @Author: maggot-code
 * @Date: 2022-10-19 17:39:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-20 09:27:14
 * @Description:
 */
import { useMold } from './useMold';

export function defineSetter(control) {
    const mold = useMold(control);

    return { control, mold };
}

export default defineSetter;
