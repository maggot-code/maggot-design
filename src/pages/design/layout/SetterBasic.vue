<!--
 * @FilePath: \maggot-design\src\pages\design\layout\SetterBasic.vue
 * @Author: maggot-code
 * @Date: 2022-10-14 11:16:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 11:24:02
 * @Description: 
-->
<script setup>
import { watchEffect, unref } from "vue";
import { useActive } from "../hook/useActive";
import { useSetter } from "../hook/useSetter";
// mold
const moldOptions = [{ label: '默认', value: 'default' }];
// field
const fieldOptions = [
    { label: "姓名", value: "name" },
    { label: "地址", value: "address" }
];

const active = useActive();
const { label, name, mold, target } = active;

const setter = useSetter();

watchEffect(() => {
    console.log(active);
});
</script>

<template>
    <el-form class="design-setter-basic" ref="form" size="mini" label-position="top" :model="{}">
        <el-divider content-position="right">共享属性</el-divider>
        <el-form-item label="组件名称">
            <el-tag size="mini">{{label}} ( {{name}} )</el-tag>
        </el-form-item>
        <el-form-item label="工作模式">
            <el-select :value="mold">
                <el-option v-for="item in target.setterMold" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="绑定字段">
            <el-select value="" placeholder="请选择绑定字段">
                <el-option v-for="item in fieldOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>

        <el-divider content-position="right">样式属性</el-divider>
        <el-form-item label="栅格布局">
            <el-slider style="padding-left: 12px;" :value="24" :step="1" :min="0" :max="24" :show-stops="true">
            </el-slider>
        </el-form-item>
        <el-form-item label="组件标题">
            <el-input value="" placeholder="请输入组件标题"></el-input>
        </el-form-item>
        <el-form-item label="组件提示">
            <el-input value="" placeholder="请输入组件提示"></el-input>
        </el-form-item>
    </el-form>
</template>

<style scoped lang='scss'>
// .design-setter-basic {}
</style>
