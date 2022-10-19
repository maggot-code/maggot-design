<!--
 * @FilePath: \maggot-design\src\pages\design\component\SetterComponentName.vue
 * @Author: maggot-code
 * @Date: 2022-10-17 13:23:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-17 13:30:50
 * @Description: 
-->
<script setup>
import { useActive } from "../hook/useActive";
const { label, name } = useActive();
</script>

<template>
    <el-tag size="mini">{{label}} ( {{name}} )</el-tag>
</template>

<style scoped lang='scss'>

</style>
