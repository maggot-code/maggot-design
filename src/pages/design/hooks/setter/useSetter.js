/*
 * @FilePath: \maggot-design\src\pages\design\hooks\setter\useSetter.js
 * @Author: maggot-code
 * @Date: 2022-10-20 09:24:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-20 09:25:38
 * @Description:
 */
import { inject } from 'vue';
import { SetterSymbol } from '../../shared/context';

export function useSetter() {
    const setter = inject(SetterSymbol);
    const bind = {};

    return Object.assign({}, setter, bind);
}

export default useSetter;
