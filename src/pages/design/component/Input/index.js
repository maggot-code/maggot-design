/*
 * @FilePath: \maggot-design\src\pages\design\component\Input\index.js
 * @Author: maggot-code
 * @Date: 2022-10-13 15:43:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-14 17:26:08
 * @Description:
 */
import { defineDescribe } from '../../hook/defineDescribe';
import MoldText from './text';
import MoldPassword from './password';
import MoldNumber from './number';

export default defineDescribe('输入框', MoldText, {
    [MoldText.mold]: MoldText,
    [MoldPassword.mold]: MoldPassword,
    [MoldNumber.mold]: MoldNumber,
});
