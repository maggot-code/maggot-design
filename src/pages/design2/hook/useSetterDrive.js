/*
 * @FilePath: \maggot-design\src\pages\design\hook\useSetterDrive.js
 * @Author: maggot-code
 * @Date: 2022-10-14 16:25:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-14 16:25:39
 * @Description:
 */
import { inject } from 'vue';
import { SetterDriveSymbolKeyword } from '../shared/context';

export function useSetterDrive() {
    return inject(SetterDriveSymbolKeyword);
}

export default useSetterDrive;
