<!--
 * @FilePath: \maggot-design\src\pages\design\component\PreviewForm.vue
 * @Author: maggot-code
 * @Date: 2022-10-21 16:30:40
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 16:40:47
 * @Description: 
-->
<script setup>
import { useFormFile, useFormRemote } from "@/biz/Form";
import { useControl } from "../hooks/control";

const UploadKey = "";
const UploadBaseURL = "";
const UploadAddress = "";
const config = {
    define: { UploadKey, UploadBaseURL, UploadAddress }
};

const file = useFormFile({ config });
const remote = useFormRemote({ config });
const control = useControl();

const { formRefs, token, proName, formJob, formSchema, cellSchema } = control.preview.template;
</script>

<template>
    <mg-form class="design-preview-form" ref="formRefs" :token="token" :proName="proName" :job="formJob"
        :upload="file.template" :remote="remote.template" :schema="{ formSchema, cellSchema }">
    </mg-form>
</template>

<style scoped lang='scss'>
.design-preview-form {
    width: 100%;
    height: auto;
    min-height: 100%;
}
</style>
