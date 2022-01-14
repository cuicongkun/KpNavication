import { NavigationType } from "../src/types";
export const navigation: NavigationType = [
  {
    id: 10001,
    navName: "便捷工具",
    children: [
      {
        siteName: "Can I use",
        url: "https://caniuse.com/",
        desc: "Caniuse用于查看浏览器对各种新特性的兼容情况。",
      },
      {
        siteName: "Mirror List",
        url: "https://www.library.ac.cn/",
        desc: "学术党必备的谷歌学术镜像网站，可以直接访问，与谷歌学术一样。",
      },
      {
        siteName: "zx",
        url: "https://github.com/google/zx",
        desc: "可在JavaScript或TypeScript中编写简单的命令行脚本",
      },
      {
        siteName: "超赞合集",
        url: "https://asmcn.icopy.site/",
        desc: "awesome 列表中文版",
      },
      {
        siteName: "Multiavatar",
        logo: 'https://multiavatar.com/img/logo-animated.gif?v=003',
        url: "https://multiavatar.com/",
        desc: "为你生成独一无二的虚拟头像",
      },
     
    ],
  },
  {
    id: 10002,
    navName: "JavaScript",
    children: [
      {
        siteName: "阮一峰ES6教程",
        logo: "https://www.ruanyifeng.com/blog/images/person2_s.jpg",
        url: "https://es6.ruanyifeng.com/",
        desc: "《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。",
      },
      
      {
        siteName: "React",
        logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        url: "https://zh-hans.reactjs.org/",
        desc: "React 是一个用于构建用户界面的 JavaScript 库。",
        version: "v17.0.2",
      },
      {
        siteName: "React Native",
        logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        url: "https://reactnative.dev/",
        desc: "以React为基础构建移动端应用的跨平台解决方案!",
        version: "v0.66",
      },
      {
        siteName: "React Router",
        logo: "/logo_with/react_router.png",
        url: "https://reactrouter.com/",
        desc: "React的路由解决方案!",
        version: "v6",
      },
      {
        siteName: "Redux",
        logo: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
        url: "http://cn.redux.js.org/",
        desc: "JS 应用的状态容器，提供可预测的状态管理!",
        version: "v6",
      },
      {
        siteName: "Lodash ",
        logo: "https://lodash.com/assets/img/lodash.svg",
        url: "https://lodash.com/",
        desc: "Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。",
        version: "v4.17.15",
      },
      {
        siteName: "Vue",
        logo: "https://v3.cn.vuejs.org/logo.png",
        url: "https://v3.cn.vuejs.org/",
        desc: "渐进式JavaScript 框架",
        version: "v3",
      },
      {
        siteName: "VuePress",
        logo: "https://v2.vuepress.vuejs.org/images/hero.png",
        url: "https://v2.vuepress.vuejs.org/zh/",
        desc: "Vue 驱动的静态网站生成器",
        version: "v2",
      },
      {
        siteName: "algolia",
        logo: "https://www.algolia.com/algoliaweb-static-favicons/favicon-32x32.png",
        url: "https://www.algolia.com/",
        desc: "托管式搜索API"
      },
      
    ],
  },
  {
    id: 10003,
    navName: "预编译工具",
    children: [
      {
        siteName: "TypeScript",
        logo: "https://typescript.bootcss.com/images/typescript-icon.svg",
        url: "https://www.typescriptlang.org/zh/",
        desc: "JavaScript 的超集!",
        version: "v4.5",
      },
      {
        siteName: "Sass",
        logo: "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
        url: "https://sass-lang.com/",
        desc: "CSS 预编译工具 CSS with superpowers",
        version: "LibSass",
      },
    ],
  },
  {
    id: 10004,
    navName: "构建工具",
    children: [
      {
        siteName: "Vite",
        logo: "https://vitejs.cn/logo.svg",
        url: "https://vitejs.cn/",
        desc: "下一代前端开发与构建工具",
        version: "v2.7.3",
      },
    ],
  },
  {
    id: 10005,
    navName: "程序设计语言",
    children: [
      {
        siteName: "Rust",
        logo: "https://www.rust-lang.org/static/images/rust-logo-blk.svg",
        url: "https://www.rust-lang.org/zh-CN/",
        desc: "一门赋予每个人构建可靠且高效软件能力的语言。",
        version: "v1.57.0",
      }
    ],
  },
  {
    id: 10006,
    navName: "工作&赚钱",
    children: [
      {
        siteName: "电鸭",
        logo: "https://eleduck.com/static/icon-500.png",
        url: "https://eleduck.com/categories/22",
        desc: "电鸭社区是互联网工作者们的聚集地，我们倡导“只工作，不上班”的生活方式。",
      },
      {
        siteName: "凡科建站快车",
        logo: "https://ahs.faisys.com/image/logoNew.png?v=201703221652",
        url: "https://www.sitekc.com/login.jsp",
        desc: "专门针对企业网站建设的自助建站服务平台",
      },
      
    ],
  },
];
