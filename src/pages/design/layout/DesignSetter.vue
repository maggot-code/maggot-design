<!--
 * @FilePath: \maggot-design\src\pages\design\layout\DesignSetter.vue
 * @Author: maggot-code
 * @Date: 2022-10-19 09:40:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 15:17:01
 * @Description: 
-->
<script setup>
import SetterBasic from "../component/SetterBasic.vue";
import SetterSenior from "../component/SetterSenior.vue";
import SetterDrive from "../component/SetterDrive.vue";

import { ref } from "vue";
import { useControl } from "../hooks/control";

const setterName = ref("basic");
const control = useControl();
const { unusable } = control.preview.schema.cell;
</script>

<template>
    <div v-if="unusable" class="design-setter-empty">
        <h1>Empty</h1>
    </div>
    <el-tabs v-else class="design-setter" v-model="setterName" :stretch="true">
        <el-tab-pane label="基础属性" name="basic">
            <SetterBasic class="design-setter-layout"></SetterBasic>
        </el-tab-pane>

        <el-tab-pane label="高级属性" name="senior">
            <SetterSenior class="design-setter-layout"></SetterSenior>
        </el-tab-pane>

        <el-tab-pane label="联动属性" name="drive">
            <SetterDrive class="design-setter-layout"></SetterDrive>
        </el-tab-pane>
    </el-tabs>
</template>

<style scoped lang='scss'>
.design-setter {
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    & :deep(.el-tabs__content) {
        height: calc(100% - 55px);
        padding-right: 16px;
        overflow-x: hidden;
        overflow-y: auto;
        box-sizing: border-box;
    }
}
</style>
