<!--
 * @FilePath: \maggot-design\src\pages\design\component\SetterLabel.vue
 * @Author: maggot-code
 * @Date: 2022-10-17 15:39:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 15:47:23
 * @Description: 
-->
<script setup>
import { unref, computed } from "vue";
import { useForm } from "../hook/useForm";
import { useActive } from "../hook/useActive";

const form = useForm();
const { target, field, notField } = useActive();
const labelValue = computed(() => unref(target).schema.uiSchema.label);

function handlerLabel(value) {
    if (unref(notField)) return;

    form.setupCellSchema((item) => {
        const update = item.field === unref(field);
        if (!update) return [update];

        item.uiSchema.label = value;
        return [update, item];
    });
}
</script>

<template>
    <el-input :value="labelValue" placeholder="请输入组件标题" @input="handlerLabel"></el-input>
</template>

<style scoped lang='scss'>

</style>
