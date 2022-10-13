<!--
 * @FilePath: \maggot-design\src\pages\design\layout\Preview.vue
 * @Author: maggot-code
 * @Date: 2022-10-13 09:49:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 14:51:18
 * @Description: 
-->
<script>
import { onMounted, watchEffect } from "vue";
import { defineForm, useFormFile, useFormRemote } from "@/biz/Form";
import { useStore } from "../hook/useStore";
import { usePreview } from "../hook/usePreview";
import SchemaData from "@/assets/json/form.v1.json";

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
        const { store } = useStore();
        const preview = usePreview();
        const config = {
            define: defineConfig
        };
        const form = defineForm();
        const file = useFormFile({ config, form });
        const remote = useFormRemote({ config, form });

        watchEffect(() => {
            const cellSchema = store.keys().map(key => store.get(key).toSchema());

            form.schema.setup({ formSchema: {}, cellSchema });
        });
        onMounted(() => { });
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
    height: 100%;
    overflow: hidden;
}
</style>
