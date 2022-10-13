/*
 * @FilePath: \maggot-design\src\pages\design\hook\definePreview.js
 * @Author: maggot-code
 * @Date: 2022-10-13 09:58:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 10:07:40
 * @Description:
 */
import { provide } from 'vue';
import { PreviewSymbolName } from '../shared/context';

export function definePreview() {
    provide(PreviewSymbolName, {});

    return {};
}

export default definePreview;
