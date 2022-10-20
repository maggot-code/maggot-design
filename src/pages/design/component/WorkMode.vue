<!--
 * @FilePath: \maggot-design\src\pages\design\component\WorkMode.vue
 * @Author: maggot-code
 * @Date: 2022-10-19 15:24:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-20 16:52:12
 * @Description: 
-->
<script setup>
import { useControl } from "../hooks/control";
import { useSetter } from "../hooks/setter";

const control = useControl();
const setter = useSetter();
const { template } = control.active;
const { unusable } = setter;
const { options } = setter.mold;
</script>

<template>
    <div class="design-setter-basic-mold">
        <el-select size="small" :disabled="unusable" :value="template.mold" @change="setter.mold.setup">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<style scoped lang='scss'>

</style>
