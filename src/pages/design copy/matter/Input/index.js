/*
 * @FilePath: \maggot-design\src\pages\design\matter\Input\index.js
 * @Author: maggot-code
 * @Date: 2022-10-13 15:43:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-18 15:23:14
 * @Description:
 */
import { defineDescribe } from '../../hook/defineDescribe';
import MoldText from './text';
import MoldPassword from './password';
import MoldNumber from './number';

const MoldData = {
    [MoldText.mold]: MoldText,
    [MoldPassword.mold]: MoldPassword,
    [MoldNumber.mold]: MoldNumber,
};
export default defineDescribe('输入框', MoldText, MoldData);
