/*
 * @FilePath: \maggot-design\src\pages\design\hook\useSetterHigh.js
 * @Author: maggot-code
 * @Date: 2022-10-14 16:25:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-14 16:26:05
 * @Description:
 */
import { inject } from 'vue';
import { SetterHighSymbolKeyword } from '../shared/context';

export function useSetterHigh() {
    return inject(SetterHighSymbolKeyword);
}

export default useSetterHigh;
