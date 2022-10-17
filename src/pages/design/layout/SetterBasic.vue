<!--
 * @FilePath: \maggot-design\src\pages\design\layout\SetterBasic.vue
 * @Author: maggot-code
 * @Date: 2022-10-14 11:16:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 15:40:54
 * @Description: 
-->
<script setup>
import SetterComponentName from "../component/SetterComponentName.vue";
import SetterWorkMold from "../component/SetterWorkMold.vue";
import SetterBindField from "../component/SetterBindField.vue";
import SetterColSlider from "../component/SetterColSlider.vue";
import SetterLabel from "../component/SetterLabel.vue";
import SetterTips from "../component/SetterTips.vue";

import { useSetter } from "../hook/useSetter";

const setter = useSetter();
console.log(setter);
</script>

<template>
    <el-form class="design-setter-basic" ref="form" size="mini" label-position="top" :model="{}">
        <el-divider content-position="right">共享属性</el-divider>
        <el-form-item label="组件名称">
            <SetterComponentName></SetterComponentName>
        </el-form-item>
        <el-form-item label="工作模式">
            <SetterWorkMold></SetterWorkMold>
        </el-form-item>
        <el-form-item label="绑定字段">
            <SetterBindField></SetterBindField>
        </el-form-item>

        <el-divider content-position="right">样式属性</el-divider>
        <el-form-item label="栅格布局">
            <SetterColSlider></SetterColSlider>
        </el-form-item>
        <el-form-item label="组件标题">
            <SetterLabel></SetterLabel>
        </el-form-item>
        <el-form-item label="组件提示">
            <SetterTips></SetterTips>
        </el-form-item>
    </el-form>
</template>

<style scoped lang='scss'>
// .design-setter-basic {}
</style>
