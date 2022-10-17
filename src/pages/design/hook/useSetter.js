/*
 * @FilePath: \maggot-design\src\pages\design\hook\useSetter.js
 * @Author: maggot-code
 * @Date: 2022-10-17 09:52:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 09:52:54
 * @Description:
 */
import { inject } from 'vue';
import { SetterSymbolKeyword } from '../shared/context';

export function useSetter() {
    return inject(SetterSymbolKeyword);
}

export default useSetter;
