<!--
 * @FilePath: \maggot-design\src\pages\design\component\PreviewJson.vue
 * @Author: maggot-code
 * @Date: 2022-10-21 16:30:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-21 17:25:25
 * @Description: 
-->
<script setup>
import JsonView from "@/component/json-view/index.vue";

import { reactive } from "vue";
import { useControl } from "../hooks/control";
import {Message} from "element-ui";

const bindProps = reactive({
    theme: "vs-code",
    closed: false,
    isLast: false,
    fontSize: 16,
    deep: 6
});

const control = useControl();
const { cellSchema } = control.preview.template;

function copy() {
    const text = JSON.stringify(cellSchema.value, null, 4);
    const input = document.createElement("textarea");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    Message.success("复制成功");
}
</script>

<template>
    <div class="design-preview-json">
        <el-form class="design-preview-json-head" size="mini" label-suffix=" : " :inline="true" :model="bindProps">
            <el-form-item label="字号">
                <el-input v-model="bindProps.fontSize"></el-input>
            </el-form-item>
            <el-form-item label="自动展开深度">
                <el-input v-model="bindProps.deep"></el-input>
            </el-form-item>
            <el-form-item label="是否折叠">
                <el-switch v-model="bindProps.closed"></el-switch>
            </el-form-item>
            <el-form-item label="操作">
                <el-button type="primary" :plain="true" @click="copy">
                    复制到剪贴板
                </el-button>
            </el-form-item>
        </el-form>

        <JsonView class="design-preview-json-body" :data="cellSchema" v-bind="bindProps"></JsonView>
    </div>
</template>

<style scoped lang='scss'>
.design-preview-json {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &-head,
    &-body {
        width: 100%;
    }

    &-head {
        height: 48px;
        overflow: hidden;
    }

    &-body {
        height: calc(100% - 48px);
        overflow-y: auto;
        overflow-x: hidden;
    }
}
</style>
