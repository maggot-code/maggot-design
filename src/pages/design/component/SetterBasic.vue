<!--
 * @FilePath: \maggot-design\src\pages\design\component\SetterBasic.vue
 * @Author: maggot-code
 * @Date: 2022-10-19 15:14:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-20 14:31:41
 * @Description: 
-->
<script setup>
import ComponentName from "./ComponentName.vue";
import WorkMode from "./WorkMode.vue";
import DataField from "./DataField.vue";

import { onMounted } from "vue";
import { useFormFile, useFormRemote } from "@/biz/Form";
import { useControl } from "../hooks/control";
import { useSetter } from "../hooks/setter";

const UploadKey = "";
const UploadBaseURL = "";
const UploadAddress = "";
const config = {
    define: { UploadKey, UploadBaseURL, UploadAddress }
};

const file = useFormFile({ config });
const remote = useFormRemote({ config });
const control = useControl();
const setter = useSetter();

const { formRefs, token, proName, formJob, formSchema, cellSchema } = control.basic.template;
const { usable } = setter;

onMounted(() => {
    control.basic.schema.form.setup({
        labelPosition: "left"
    });
});
</script>

<template>
    <div class="design-setter-basic">
        <h1>共享属性</h1>
        <ComponentName></ComponentName>
        <WorkMode></WorkMode>
        <DataField></DataField>

        <template v-if="usable">
            <h1>样式属性</h1>
            <mg-form class="design-setter-basic-form" ref="formRefs" :token="token" :proName="proName" :job="formJob"
                :upload="file.template" :remote="remote.template" :schema="{ formSchema, cellSchema }"
                @monitor-value="setter.ui.handlerMonitor">
            </mg-form>
        </template>
    </div>
</template>

<style scoped lang='scss'>

</style>
