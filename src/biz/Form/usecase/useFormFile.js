/*
 * @FilePath: \maggot-design\src\biz\Form\usecase\useFormFile.js
 * @Author: maggot-code
 * @Date: 2022-10-10 14:00:28
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 10:15:12
 * @Description:
 */
import axios from 'axios';

function Upload({ define }) {
    const { UploadKey, UploadBaseURL, UploadAddress } = define;

    function request({ file, onProgress }) {
        const { uid } = file;
        const tocancel = new AbortController();
        const body = new FormData();
        body.append(UploadKey, file);

        function tocall() {
            return axios({
                method: 'POST',
                baseURL: UploadBaseURL,
                url: UploadAddress,
                data: body,
                signal: tocancel.signal,
                hideError: true,
                onUploadProgress: (progress) => {
                    const { loaded, total } = progress;
                    const percent = (loaded / total) * 100;
                    onProgress({ percent });
                },
            });
        }

        return { uid, tocancel, tocall };
    }

    return {
        request,
    };
}

function Download({ define }) {
    const { UploadBaseURL, FileAddress } = define;

    function request(file) {
        const url = FileAddress + file.url;
        return axios({
            baseURL: UploadBaseURL,
            url,
            method: 'GET',
            responseType: 'blob',
            hideError: true,
        });
    }

    return {
        request,
    };
}

export function useFormFile({ config }) {
    const up = Upload(config);
    const down = Download(config);

    const template = {
        call: up.request,
        down: down.request,
    };

    return {
        template,
        up,
        down,
    };
}

export default useFormFile;
