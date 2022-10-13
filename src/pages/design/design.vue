<!--
 * @FilePath: \maggot-design\src\pages\design\design.vue
 * @Author: maggot-code
 * @Date: 2022-10-13 09:30:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-13 10:25:52
 * @Description: 
-->
<script setup>
import DesignMatter from "./layout/Matter.vue";
import DesignPreview from "./layout/Preview.vue";
import DesignSetter from "./layout/Setter.vue";

import { defineMatter, definePreview, defineSetter } from "./hook/define";

const matter = defineMatter();
const preview = definePreview();
const setter = defineSetter();

</script>

<template>
    <main class="design">
        <div class="design-layout design-head">
            <section class="design-head-handler">操作</section>
        </div>
        <div class="design-layout design-body">
            <section class="design-body-container design-body-matter">
                <DesignMatter></DesignMatter>
            </section>
            <section class="design-body-container design-body-view">
                <DesignPreview></DesignPreview>
            </section>
            <section class="design-body-container design-body-setter">
                <DesignSetter></DesignSetter>
            </section>
        </div>
    </main>
</template>

<style scoped lang='scss'>
@import "./design.scss";
</style>
