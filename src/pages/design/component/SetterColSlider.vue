<!--
 * @FilePath: \maggot-design\src\pages\design\component\SetterColSlider.vue
 * @Author: maggot-code
 * @Date: 2022-10-17 13:29:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 15:30:12
 * @Description: 
-->
<script setup>
import { unref, computed } from "vue";
import { useForm } from "../hook/useForm";
import { useActive } from "../hook/useActive";

const form = useForm();
const { target, field, notField } = useActive();
const colValue = computed(() => unref(target).schema.uiSchema.col);

function handlerSlider(value) {
    if (unref(notField)) return;

    form.setupCellSchema((item) => {
        const update = item.field === unref(field);

        if (update) item.uiSchema.col = value;

        return [update, item];
    });
}
</script>

<template>
    <el-slider style="padding-left: 12px;" :value="colValue" :step="1" :min="0" :max="24" :show-stops="true"
        @input="handlerSlider">
    </el-slider>
</template>

<style scoped lang='scss'>

</style>
