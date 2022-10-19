<!--
 * @FilePath: \maggot-design\src\pages\design\design.vue
 * @Author: maggot-code
 * @Date: 2022-10-13 09:30:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-10-19 09:57:39
 * @Description: 
-->
<script setup>
import DesignMatter from "./layout/DesignMatter.vue";
import DesignPreview from "./layout/DesignPreview.vue";
import DesignSetter from "./layout/DesignSetter.vue";

import { provide } from "vue";
import { defineForm } from "@/biz/Form";
import { defineMatter } from "./hooks/matter";
import { defineControl } from "./hooks/control";
import { PreviewFormSymbol, BasicSetterFormSymbol, SeniorSetterFormSymbol, ControlSymbol } from "./shared/context";

const preview = defineForm();
const basic = defineForm();
const senior = defineForm();

const matter = defineMatter();
const control = defineControl({ preview, basic, senior, matter });

provide(PreviewFormSymbol, preview);
provide(BasicSetterFormSymbol, basic);
provide(SeniorSetterFormSymbol, senior);
provide(ControlSymbol, control);
</script>

<template>
    <main class="design">
        <div class="design-layout design-head">
            <section class="design-head-handler"></section>
        </div>
        <div class="design-layout design-body">
            <section class="design-body-container design-body-matter">
                <DesignMatter></DesignMatter>
            </section>
            <section class="design-body-container design-body-preview">
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
