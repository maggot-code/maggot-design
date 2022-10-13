/*
 * @FilePath: \maggot-design\src\biz\Form\usecase\useFormRemote.js
 * @Author: maggot-code
 * @Date: 2022-10-10 15:49:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 10:15:40
 * @Description:
 */
function Search() {
    function request() {
        return Promise.resolve([]);
    }

    return {
        request,
    };
}

function Enums() {
    function request() {
        return Promise.resolve([]);
    }

    return {
        request,
    };
}

export function useFormRemote({ config }) {
    const search = Search(config);
    const enums = Enums(config);

    const template = {
        search: search.request,
        enums: enums.request,
    };

    return {
        template,
        search,
        enums,
    };
}

export default useFormRemote;
