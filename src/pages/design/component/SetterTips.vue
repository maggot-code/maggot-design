<!--
 * @FilePath: \maggot-design\src\pages\design\component\SetterTips.vue
 * @Author: maggot-code
 * @Date: 2022-10-17 15:39:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 15:45:57
 * @Description: 
-->
<script setup>
import { unref, computed } from "vue";
import { useForm } from "../hook/useForm";
import { useActive } from "../hook/useActive";

const form = useForm();
const { target, field, notField } = useActive();
const tipsValue = computed(() => unref(target).schema.uiSchema.tips);

function handlerTips(value) {
    if (unref(notField)) return;

    form.setupCellSchema((item) => {
        const update = item.field === unref(field);
        if (!update) return [update];

        item.uiSchema.tips = value;
        return [update, item];
    });
}
</script>

<template>
    <el-input :value="tipsValue" placeholder="请输入组件提示" @input="handlerTips"></el-input>
</template>

<style scoped lang='scss'>

</style>
