<!--
 * @FilePath: \maggot-design\src\pages\design\component\SetterBasic.vue
 * @Author: maggot-code
 * @Date: 2022-10-19 15:14:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 14:07:03
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
        labelWidth: "140px",
        labelPosition: "left"
    });
});
</script>

<template>
    <div class="design-setter-basic">
        <el-divider content-position="right">共享属性</el-divider>
        <div class="design-setter-basic-shared">
            <div class="design-setter-basic-shared-matter">
                <WorkMode></WorkMode>
                <ComponentName></ComponentName>
            </div>
            <DataField></DataField>
        </div>

        <template v-if="usable">
            <el-divider content-position="right">样式属性</el-divider>
            <div class="design-setter-basic-ui">
                <mg-form class="design-setter-basic-form" ref="formRefs" :token="token" :proName="proName"
                    :job="formJob" :upload="file.template" :remote="remote.template"
                    :schema="{ formSchema, cellSchema }" @monitor-value="setter.ui.handlerMonitor">
                </mg-form>
            </div>
        </template>
        <el-empty v-else description="暂无样式属性"></el-empty>
    </div>
</template>

<style scoped lang='scss'>
.design-setter-basic {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;

    &-shared {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 90px;
        overflow: hidden;

        &-matter {
            width: 100%;
            height: 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    &-ui {
        flex: 1;
        width: 100%;
        height: auto;
        padding-right: 6px;
        overflow-x: hidden;
        overflow-y: auto;
        box-sizing: border-box;
    }
}
</style>
