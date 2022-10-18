<!--
 * @FilePath: \maggot-design\src\pages\design\layout\Preview.vue
 * @Author: maggot-code
 * @Date: 2022-10-13 09:49:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-18 17:01:29
 * @Description: 
-->
<script>
import { onMounted } from "vue";
import { useForm } from "../hook/useForm";
import { useFormFile, useFormRemote } from "@/biz/Form";
import SchemaData from "@/assets/json/form.v1.json";
// import SchemaData from "@/assets/json/form.v2.json";
// import SchemaData from "@/assets/json/form.v3.json";

const UploadKey = "";
const UploadBaseURL = "";
const UploadAddress = "";
const defineConfig = { UploadKey, UploadBaseURL, UploadAddress };
export default {
    name: "DesignPreview",
    mixins: [],
    components: {},
    props: {},
    setup(props) {
        const config = {
            define: defineConfig
        };
        const form = useForm();
        const file = useFormFile({ config, form });
        const remote = useFormRemote({ config, form });

        onMounted(() => {
            form.schema.setup(SchemaData);
        });
        return {
            ...form.template,
            file: file.template,
            remote: remote.template,
        }
    },
};
</script>

<template>
    <div class="design-preview">
        <mg-form class="design-preview-form" ref="formRefs" :token="token" :proName="proName" :job="formJob"
            :upload="file" :remote="remote" :schema="{ formSchema, cellSchema }">
        </mg-form>
    </div>
</template>

<style scoped lang='scss'>
.design-preview {
    width: 100%;
    height: auto;
}
</style>
