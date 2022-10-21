<!--
 * @FilePath: \maggot-design\src\pages\design\layout\DesignPreview.vue
 * @Author: maggot-code
 * @Date: 2022-10-19 09:40:56
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 14:52:50
 * @Description: 
-->
<script setup>
import SchemaData from "@/assets/json/form.v1.json";
// import SchemaData from "@/assets/json/form.v2.json";
// import SchemaData from "@/assets/json/form.v3.json";

import { onMounted } from "vue";
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

onMounted(() => {
    control.preview.schema.setup(SchemaData);
});
</script>

<template>
    <div class="design-preview">
        <mg-form class="design-preview-form" ref="formRefs" :token="token" :proName="proName" :job="formJob"
            :upload="file.template" :remote="remote.template" :schema="{ formSchema, cellSchema }">
        </mg-form>
    </div>
</template>

<style scoped lang='scss'>
.design-preview {
    width: 100%;
    height: 100%;
    padding: 12px 6px;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
}
</style>
