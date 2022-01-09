import { NavigationType } from "../types";
export const navigation: NavigationType = [
    {
        id: 10001,
        navName: 'JavaScript 库',
        children: [
            {
                siteName: 'React',
                url: 'https://zh-hans.reactjs.org/docs/getting-started.html',
                desc: 'React 是一个用于构建用户界面的 JavaScript 库。'
            },
            {
                siteName: 'vite',
                url: 'asd',
                desc: 'ooo'
            }
        ]
    },
    {
        id: 10002,
        navName: '构建工具',
        children: [
            {
                siteName: 'vite',
                url: 'asd',
                desc: 'ooo'
            }
        ]
    },
    {
        id: 10003,
        navName: '构建工具'
    }
];
