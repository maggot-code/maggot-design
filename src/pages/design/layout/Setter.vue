<!--
 * @FilePath: \maggot-design\src\pages\design\layout\Setter.vue
 * @Author: maggot-code
 * @Date: 2022-10-13 09:49:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-14 11:01:36
 * @Description: 
-->
<script setup>
import { useActive } from "../hook/useActive";
import { useMatterSelect } from "../hook/useMatterSelect";

const { target } = useActive();
const select = useMatterSelect();

console.log(select);

</script>

<template>
    <div>
        <h1>选中控件的属性设置</h1>
        <p>{{target}}</p>
    </div>
</template>

<style scoped lang='scss'>

</style>
