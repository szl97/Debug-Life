import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '第一部分：Catch Error',
      items: ['catch-error/运行时的系统性死锁', 'catch-error/CPU空转：努力成为一种精神内耗', 'catch-error/难以清理的技术债务'],
    },
    {
      type: 'category',
      label: '第二部分：Code Review',
      items: ['code-review/欲望是人生的目标函数', 'code-review/欲望的限流机制'],
    },
  ],
};

export default sidebars;
