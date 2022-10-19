<!--
 * @FilePath: \maggot-design\src\pages\design\component\WorkMode.vue
 * @Author: maggot-code
 * @Date: 2022-10-19 15:24:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 17:53:28
 * @Description: 
-->
<script setup>
import { useControl } from "../hooks/control";
import { useMold } from "../hooks/setter";

const control = useControl();
const { options, setup } = useMold(control);
const { template } = control.active;
</script>

<template>
    <div class="design-setter-basic-mold">
        <el-select size="mini" :value="template.mold" @change="setup">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<style scoped lang='scss'>

</style>
