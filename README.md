# maggot-design

## 0-0 物料
```javascript
const text = {
    // 基础属性 - 共享（选择）
    mold:"text",
    // 基础属性 - 样式（更新）
    uiSchema:{},
    // 高级属性 - 数据（更新）
    dataSchema:{},
    // 高级属性 - 校验（更新）
    ruleSchema:{},
    // 联动属性
    leaderTag:{},
    workerTag:[]
};
const number = {
    // 基础属性 - 共享（选择）
    mold:"number",
    // 基础属性 - 样式（更新）
    uiSchema:{},
    // 高级属性 - 数据（更新）
    dataSchema:{},
    // 高级属性 - 校验（更新）
    ruleSchema:{},
    // 联动属性
    leaderTag:{},
    workerTag:[]
};
const mold = {
    [text.mold]:text,
    [number.mold]:number
};
// 属性设计器中用来渲染的结构
const struct = {
    // 基础属性 - 共享（只读）
    componentName:"mg-input",
    // 基础属性 - 共享（只读）
    label:"输入框",
    mold:text.mold
}
```
只提供定义，不提供校验，校验交给业务方自己实现

## 1-0 物料列表
```javascript
import {warehouse} from "matter";

```

## 1-1 属性设计器

## 2-0 预览视图

## 2-1 基础属性

## 2-2 高级属性

## 3-0 控件
