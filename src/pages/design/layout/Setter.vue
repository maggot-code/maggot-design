<!--
 * @FilePath: \maggot-design\src\pages\design\layout\Setter.vue
 * @Author: maggot-code
 * @Date: 2022-10-13 09:49:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-14 16:28:02
 * @Description: 
-->
<script setup>
import SetterBasic from "../layout/SetterBasic.vue";
import SetterHigh from "../layout/SetterHigh.vue";
import SetterDrive from "../layout/SetterDrive.vue";

import { ref } from "vue";
import { useActive } from "../hook/useActive";
import { defineSetter } from "../hook/defineSetter";

const setterName = ref("basic");
const active = useActive();
const setter = defineSetter(active);
console.log(setter);
</script>

<template>
    <el-tabs class="design-setter" v-model="setterName" :stretch="true">
        <el-tab-pane label="基础属性" name="basic">
            <SetterBasic class="design-setter-layout"></SetterBasic>
        </el-tab-pane>

        <el-tab-pane label="高级属性" name="high">
            <SetterHigh class="design-setter-layout"></SetterHigh>
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
