import { NavigationType } from "../src/types";
export const navigation: NavigationType = [
  {
    id: 10001,
    navName: "便捷工具",
    children: [
      {
        siteName: "Mirror List",
        url: "https://www.library.ac.cn/",
        desc: "学术党必备的谷歌学术镜像网站，可以直接访问，与谷歌学术一样。",
      },
      {
        siteName: "电鸭",
        logo: "https://eleduck.com/static/icon-500.png",
        url: "https://eleduck.com/categories/22",
        desc: "电鸭社区是互联网工作者们的聚集地，我们倡导“只工作，不上班”的生活方式。",
      },
      {
        siteName: "zx",
        url: "https://github.com/google/zx",
        desc: "可在JavaScript或TypeScript中编写简单的命令行脚本",
      },
      
    ],
  },
  {
    id: 10001,
    navName: "JavaScript",
    children: [
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
        logo: "http://cn.redux.js.org/img/redux.svg",
        url: "http://cn.redux.js.org/",
        desc: "JS 应用的状态容器，提供可预测的状态管理!",
        version: "v6",
      },
      
      
    ],
  },
  {
    id: 10002,
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
    id: 10003,
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
    id: 10002,
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
];
