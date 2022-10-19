<!--
 * @FilePath: \maggot-design\src\pages\design\component\ComponentName.vue
 * @Author: maggot-code
 * @Date: 2022-10-19 15:24:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 15:26:56
 * @Description: 
-->
<script setup>
import { useControl } from "../hooks/control";

const control = useControl();

console.log(control.active);
</script>

<template>
    <h1>component name</h1>
</template>

<style scoped lang='scss'>

</style>
