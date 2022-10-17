/*
 * @FilePath: \maggot-design\src\pages\design\hook\useForm.js
 * @Author: maggot-code
 * @Date: 2022-10-17 11:27:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 11:30:14
 * @Description:
 */
import { inject } from 'vue';
import { FormSymbolKeyword } from '../shared/context';

export function useForm() {
    const form = inject(FormSymbolKeyword);
    console.log(form);

    return Object.assign({}, form, {});
}

export default useForm;
