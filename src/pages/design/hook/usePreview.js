/*
 * @FilePath: \maggot-design\src\pages\design\hook\usePreview.js
 * @Author: maggot-code
 * @Date: 2022-10-13 09:54:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 10:06:09
 * @Description:
 */
import { inject } from 'vue';
import { PreviewSymbolName } from '../shared/context';

export function usePreview() {
    inject(PreviewSymbolName);

    return {};
}

export default usePreview;
