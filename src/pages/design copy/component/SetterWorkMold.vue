<!--
 * @FilePath: \maggot-design\src\pages\design\component\SetterWorkMold.vue
 * @Author: maggot-code
 * @Date: 2022-10-17 13:26:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 15:18:54
 * @Description: 
-->
<script setup>
import { unref } from "vue";
import { useForm } from "../hook/useForm";
import { useActive } from "../hook/useActive";

const form = useForm();
const { mold, target, field, notField } = useActive();

function handlerMold(value) {
    if (unref(notField)) return;

    form.setupCellSchema((item) => {
        const update = item.field === unref(field);

        if (!update) return [update];

        const schema = Object.assign({}, unref(target).switchMold(value), { field: unref(field) });

        return [update, schema];
    });
}
</script>

<template>
    <el-select :value="mold" @change="handlerMold">
        <el-option v-for="item in target.setterMold" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
    </el-select>
</template>

<style scoped lang='scss'>

</style>
