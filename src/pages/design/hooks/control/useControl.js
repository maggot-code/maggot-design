/*
 * @FilePath: \maggot-design\src\pages\design\hooks\control\useControl.js
 * @Author: maggot-code
 * @Date: 2022-10-19 13:09:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 13:11:06
 * @Description:
 */
import { inject } from 'vue';
import { ControlSymbol } from '../../shared/context';

export function useControl() {
    const control = inject(ControlSymbol);
    const bind = {};

    return Object.assign({}, control, bind);
}

export default useControl;
