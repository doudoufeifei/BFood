// ES6 语法
// 导入import 
// 导出export
// 绝大部分浏览器不支持

// ES5

// 模块 babel
// 将代码里面的ES6语法转化ES5语法

import Vue from 'vue';

// 定义一个公共的Vue对象
var bus = new Vue();

// 将bus导出去给别人用
// 导出对象
export {bus};