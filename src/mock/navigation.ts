import { NavigationType } from "../types";
export const navigation: NavigationType = [
    {
        id: 10001,
        navName: 'JavaScript',
        children: [
            {
                siteName: 'React',
                logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                url: 'https://zh-hans.reactjs.org/',
                desc: 'React 是一个用于构建用户界面的 JavaScript 库。',
                version: 'v17.0.2'
            },
            {
                siteName: 'TypeScript',
                logo: 'https://typescript.bootcss.com/images/typescript-icon.svg',
                url: 'https://www.typescriptlang.org/zh/',
                desc: 'JavaScript 的超集!',
                version: 'v4.5'
            },
            
        ]
    },
    {
        id: 10002,
        navName: '构建工具',
        children: [
            {
                siteName: 'Vite',
                logo: 'https://vitejs.cn/logo.svg',
                url: 'https://vitejs.cn/',
                desc: '下一代前端开发与构建工具',
                version: 'v2.7.3'
            }
        ]
    },
    {
        id: 10003,
        navName: '构建工具'
    }
];
