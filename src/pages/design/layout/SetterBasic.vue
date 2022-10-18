<!--
 * @FilePath: \maggot-design\src\pages\design\layout\SetterBasic.vue
 * @Author: maggot-code
 * @Date: 2022-10-14 11:16:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-18 16:56:35
 * @Description: 
-->
<script setup>
import SetterComponentName from "../component/SetterComponentName.vue";
import SetterWorkMold from "../component/SetterWorkMold.vue";
import SetterBindField from "../component/SetterBindField.vue";

import { defineForm, useFormFile, useFormRemote } from "@/biz/Form";

import { useActive } from "../hook/useActive";
import { useSetter } from "../hook/useSetter";
import { useSchema } from "../hook/useSchema";

const UploadKey = "";
const UploadBaseURL = "";
const UploadAddress = "";
const defineConfig = { UploadKey, UploadBaseURL, UploadAddress };
const config = {
    define: defineConfig
};
const form = defineForm();
const file = useFormFile({ config, form });
const remote = useFormRemote({ config, form });
const active = useActive();
const setter = useSetter();
const schema = useSchema(active, form);

const { formRefs, formSchema, cellSchema, token, proName, formJob } = form.template;
const { template: fileTemplate } = file;
const { template: remoteTemplate } = remote;

form.schema.form.setup({ labelPosition: "left", labelWidth: "110px" });
</script>

<template>
    <main class="design-setter-basic">
        <section class="design-setter-basic-item">
            <el-divider content-position="right">共享属性</el-divider>
            <el-form size="mini" label-position="top" :model="{}">
                <el-form-item label="组件名称">
                    <SetterComponentName></SetterComponentName>
                </el-form-item>
                <el-form-item label="工作模式">
                    <SetterWorkMold></SetterWorkMold>
                </el-form-item>
                <el-form-item label="绑定字段">
                    <SetterBindField></SetterBindField>
                </el-form-item>
            </el-form>
        </section>

        <section class="design-setter-basic-item">
            <el-divider content-position="right">样式属性</el-divider>
            <mg-form class="design-setter-basic-form" ref="formRefs" :token="token" :proName="proName" :job="formJob"
                :upload="fileTemplate" :remote="remoteTemplate" :schema="{ formSchema, cellSchema }"
                @monitor-value="schema.setupPreview">
            </mg-form>
        </section>
    </main>
</template>

<style scoped lang='scss'>
.design-setter-basic {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: auto;

    &-item {
        flex: 1;
        width: 100%;
    }
}
</style>
