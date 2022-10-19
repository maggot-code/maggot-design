/*
 * @FilePath: \maggot-design\src\pages\design\hook\useSetterBasic.js
 * @Author: maggot-code
 * @Date: 2022-10-14 16:24:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-14 16:25:10
 * @Description:
 */
import { inject } from 'vue';
import { SetterBasicSymbolKeyword } from '../shared/context';

export function useSetterBasic() {
    return inject(SetterBasicSymbolKeyword);
}

export default useSetterBasic;
