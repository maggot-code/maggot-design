/*
 * @FilePath: \maggot-design\src\pages\design\hooks\setter\defineSetter.js
 * @Author: maggot-code
 * @Date: 2022-10-19 17:39:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-20 09:33:34
 * @Description:
 */
import { useMold } from './useMold';
import { useUISchema } from './useUISchema';

export function defineSetter(control) {
    const mold = useMold(control);
    const ui = useUISchema(control, mold);

    return { control, mold, ui };
}

export default defineSetter;
