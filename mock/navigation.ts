import { NavigationType } from "../src/types";
export const navigation: NavigationType = {
  '便捷工具': [
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
    {
      siteName: "Regexper",
      url: "https://regexper.com/",
      desc: "正则验证表达式分析工具",
    },
    {
      siteName: "Custom Elements Everywhere",
      url: "https://custom-elements-everywhere.com/",
      desc: "???有待研究",
    },
    
  ],
  '渐进式 Web 应用': [
    {
      siteName: "MDN PWA",
      logo: "https://developer.mozilla.org/favicon-48x48.97046865.png",
      url: "https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps",
      desc: "PWA（Progressive Web Apps，渐进式 Web 应用）运用现代的 Web API 以及传统的渐进式增强策略来创建跨平台 Web 应用程序。这些应用无处不在、功能丰富，使其具有与原生应用相同的用户体验优势。这组文档和指南告诉您有关 PWA 的所有信息。",
    },
    {
      siteName: "PWA Stats",
      url: "https://www.pwastats.com/",
      desc: "社区驱动的与渐进式Web应用相关的统计和新闻列表。",
    },
    {
      siteName: "HNPWA",
      logo: "https://hnpwa.com/assets/images/hnpwa-logo.png",
      url: "https://hnpwa.com/",
      desc: "Hacker News readers as Progressive Web Apps",
    },
    {
      siteName: "PWABuilder",
      logo: "https://www.pwabuilder.com/assets/images/header_logo.svg",
      url: "https://www.pwabuilder.com/",
      desc: "Ship your PWA to the app stores at lightning speed.",
    },
    {
      siteName: "Web Components",
      url: "https://developer.mozilla.org/zh-CN/docs/Web/Web_Components",
      desc: "Web Components 是一套不同的技术，允许您创建可重用的定制元素（它们的功能封装在您的代码之外）并且在您的web应用中使用它们。",
    },
    
  ],
  'JavaScript': [
    {
      siteName: "阮一峰ES6教程",
      logo: "https://www.ruanyifeng.com/blog/images/person2_s.jpg",
      url: "https://es6.ruanyifeng.com/",
      desc: "《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。",
    },
    {
      siteName: "chromedevtools",
      logo: "https://chromedevtools.github.io/devtools-protocol/images/logo.png",
      url: "https://chromedevtools.github.io/devtools-protocol/",
      desc: "chrome浏览器chromedevtools调试工具说明",
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
  '预编译工具': [
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
  '构建工具': [
    {
      siteName: "Vite",
      logo: "https://vitejs.cn/logo.svg",
      url: "https://vitejs.cn/",
      desc: "下一代前端开发与构建工具",
      version: "v2.7.3",
    },
  ],
  '程序设计语言': [
    {
      siteName: "Rust",
      logo: "https://www.rust-lang.org/static/images/rust-logo-blk.svg",
      url: "https://www.rust-lang.org/zh-CN/",
      desc: "一门赋予每个人构建可靠且高效软件能力的语言。",
      version: "v1.57.0",
    }
  ],
  '工作&赚钱':  [
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
  '我们的宇宙': [
    {
      siteName: "八十华严",
      url: "http://www.baus-ebs.org/sutra/jan-read/006/0279/",
      desc: "了解宇宙真相的一本复杂的书",
    },
  ]
};
