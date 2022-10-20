<!--
 * @FilePath: \maggot-design\src\pages\design\component\ComponentName.vue
 * @Author: maggot-code
 * @Date: 2022-10-19 15:24:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-20 16:50:35
 * @Description: 
-->
<script setup>
import { useControl } from "../hooks/control";

const control = useControl();

const { template } = control.active;
</script>

<template>
    <el-tag size="small">{{template.componentName}}</el-tag>
</template>

<style scoped lang='scss'>

</style>
