<!--
 * @FilePath: \maggot-design\src\pages\design\layout\DesignPreview.vue
 * @Author: maggot-code
 * @Date: 2022-10-19 09:40:56
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 13:26:11
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
    <mg-form class="design-preview" ref="formRefs" :token="token" :proName="proName" :job="formJob"
        :upload="file.template" :remote="remote.template" :schema="{ formSchema, cellSchema }">
    </mg-form>
</template>

<style scoped lang='scss'>

</style>
