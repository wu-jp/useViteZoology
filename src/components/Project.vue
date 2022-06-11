<template>
  <section id="project" class="project">
    <div class="info">
      <p class="title">个人项目</p>
      <p>随便写写好玩有意思的项目💎</p>
    </div>
    <div class="project-list">

      <masonry :cols="{ default: 3, 1100: 2, 700: 1 }">
        <div class="project-box" v-for="(item, index) in projects" :key="index">
          <div class="project-item">
            <img class="logo" :src="item.logo" alt="">
            <div class="title">{{ item.title }}</div>
            <div class="badges">
              <img v-for="(img, index) in item.badges" :key="index" :src="img" alt="">
            </div>
            <div class="link">
              <a v-for="(link, index) in item.links" :key="index" :href="link.content">
                <img :src="link.image" alt="">
              </a>
            </div>
            <div class="stack">
              <p class="title">技术栈</p>
              <div>
                <img v-for="(stack, index) in item.techUsed" :key="index" :src="stack.image" :alt="stack.content">
              </div>
            </div>
          </div>
        </div>
      </masonry>

    </div>
  </section>
</template>

<script setup lang="ts">
// jest-tutorial
import jestTutorialScreenshot from "@/assets/screenshots/jest-tutorial.png";

// linter-guide
import linterGuideScreenshot from "@/assets/screenshots/linter-guide.png";

// 企业微信
import qywx from "@/assets/icons/qywx.png";
import qywxGithub from "@/assets/screenshots/qywx-github.png";
import qiankun from "@/assets/icons/qiankun.png";
import express from "@/assets/icons/express.png";

// 造轮子
import npmWheelScreenshot from "@/assets/screenshots/npm-wheel.png";

// OverWatch UI
import overwatchLogo from "@/assets/icons/overwatch-logo.png";
import overwatchUI from "@/assets/screenshots/overwatch-ui.png";

// Code Block Beautifier
import beautifierLogo from "@/assets/icons/beautifier.jpg";

// Guitar Editor
import guitarLogo from "@/assets/icons/guitar-logo.jpg";
import guitarEditor from "@/assets/screenshots/guitar-editor.png";

// 仿微信记账本
import weixin from "@/assets/svgs/weixin.svg";
import weixinCash from "@/assets/screenshots/weixin-cash.png";

// lintcode
import leetcode from "@/assets/icons/leetcode.png";
import lintcode from "@/assets/svgs/lintcode.svg";
import lintcodeScreenShot from "@/assets/screenshots/lintcode.png";

// tenet
import tenet from "@/assets/icons/tenet.webp";
import vscode from "@/assets/icons/vscode.webp";
import tenetScreenshot from "@/assets/screenshots/tenet.gif";

// node-autodoc
import nodeAutodoc from "@/assets/screenshots/node-autodoc.png";
// 技术栈
import vue from "@/assets/icons/vue.png";
import react from "@/assets/icons/react.png";
import scss from "@/assets/icons/sass.png";
import css from "@/assets/icons/css.png";
import js from "@/assets/icons/js.png";
import ts from "@/assets/icons/ts.png";
import npm from "@/assets/icons/npm.png";
import hljs from "@/assets/icons/hljs.png";
import python from "@/assets/icons/python.png";
import styledComponents from "@/assets/icons/styled-components.png";
import babel from "@/assets/icons/babel.png";
import webpack from "@/assets/icons/webpack.png";
import karma from "@/assets/icons/karma.png";
import mocha from "@/assets/icons/mocha.png";
import sinon from "@/assets/icons/sinon.png";
import travis from "@/assets/icons/travis.webp";
import jest from "@/assets/icons/jest.png";
import eslint from "@/assets/icons/eslint.png";

// links
import link from "@/assets/svgs/link.svg";
import chromeExt from "@/assets/icons/chrome-ext.png";
import github from "@/assets/svgs/github.svg";
import juejin from "@/assets/svgs/juejin.svg";
import { ref } from 'vue'
function getRandomHeight(min = 600, max = 900) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const projects = ref([
  {
    logo: jest,
    title: "Jest 实践指南",
    badges: [
      "https://img.shields.io/github/stars/haixiangyan/jest-tutorial?style=flat-square",
      "https://coveralls.io/repos/github/haixiangyan/jest-tutorial-example/badge.svg?branch=main",
    ],
    links: [
      {
        content: "https://github.yanhaixiang.com/jest-tutorial/",
        image: link,
      },
    ],
    techUsed: [
      { content: "VuePress", image: vue },
      { content: "Jest", image: jest },
    ],
  },
  {
    logo: eslint,
    title: "Linter 上手指南",
    badges: [
      "https://img.shields.io/github/stars/haixiangyan/linter-tutorial?style=flat-square",
    ],
    links: [
      {
        content: "https://github.yanhaixiang.com/linter-tutorial/",
        image: link,
      },
    ],
    techUsed: [
      { content: "VuePress", image: vue },
      { content: "Linter", image: eslint },
    ],
  },
  {
    logo: qywx,
    title: "企业微信侧边栏开发指南",
    badges: [
      "https://img.shields.io/github/stars/wecom-sidebar?style=flat-square",
    ],
    links: [
      { content: "https://wecom-sidebar.github.io/", image: link },
      { content: "https://github.com/wecom-sidebar", image: github },
    ],
    techUsed: [
      { content: "TypeScript", image: ts },
      { content: "React", image: react },
      { content: "Express", image: express },
      { content: "Qiankun", image: qiankun },
    ],
  },
  {
    logo: npm,
    badges: [
      "https://img.shields.io/github/stars/haixiangyan/make-wheels?style=flat-square",
    ],
    title: "一天学一个轮子",
    links: [
      {
        content: "https://github.com/haixiangyan/make-wheels",
        image: link,
      },
      {
        content: "https://juejin.cn/column/6965512526624718856",
        image: juejin,
      },
    ],
    techUsed: [
      { content: "NPM", image: npm },
      { content: "TypeScript", image: ts },
      { content: "JavaScript", image: js },
      { content: "React.js", image: react },
    ],
  },
  {
    logo: overwatchLogo,
    badges: [
      "https://img.shields.io/github/stars/haixiangyan/overwatch-ui?style=flat-square",
      "https://img.shields.io/npm/dm/overwatch-ui?style=flat-square",
    ],
    title: "Overwatch UI",
    links: [
      {
        content: "https://github.yanhaixiang.com/overwatch-ui-doc/#/",
        image: link,
      },
      {
        content: "https://github.com/haixiangyan/overwatch-ui",
        image: github,
      },
    ],
    techUsed: [
      { content: "Vue.js", image: vue },
      { content: "Sass", image: scss },
      { content: "JavaScript", image: js },
      { content: "NPM", image: npm },
      { content: "Babel", image: babel },
      { content: "Webpack", image: webpack },
      { content: "Karma", image: karma },
      { content: "Sinon", image: sinon },
      { content: "Mocha", image: mocha },
      { content: "Travis CI", image: travis },
    ],
  },
  {
    logo: beautifierLogo,
    badges: [
      "https://img.shields.io/chrome-web-store/users/gpcjjddhdnilcbddlonlfgdbejfboonn?style=flat-square",
      "https://img.shields.io/github/stars/haixiangyan/codeblock-beautifier?style=flat-square",
      "https://img.shields.io/chrome-web-store/stars/gpcjjddhdnilcbddlonlfgdbejfboonn?style=flat-square",
    ],
    title: "代码高亮 - Chrome 插件",
    links: [
      {
        content:
          "https://chrome.google.com/webstore/detail/code-block-beautifier/gpcjjddhdnilcbddlonlfgdbejfboonn",
        image: chromeExt,
      },
      {
        content: "https://github.com/haixiangyan/codeblock-beautifier",
        image: github,
      },
    ],
    techUsed: [
      { content: "JavaScript", image: js },
      { content: "Highlight.js", image: hljs },
    ],
  },
  {
    logo: guitarLogo,
    title: "吉他谱编辑器",
    badges: [
      "https://img.shields.io/github/stars/haixiangyan/guitar-tabs-editor?style=flat-square",
    ],
    links: [
      {
        content: "https://github.yanhaixiang.com/guitar-tabs-editor/#/",
        image: link,
      },
      {
        content: "https://github.com/haixiangyan/guitar-tabs-editor",
        image: github,
      },
    ],
    techUsed: [
      { content: "React.js", image: react },
      { content: "CSS", image: css },
      { content: "JavaScript", image: js },
      { content: "Babel", image: babel },
      { content: "Webpack", image: webpack },
    ],
  },
  {
    logo: leetcode,
    title: "LeetCode/LintCode 题解",
    badges: [
      "https://img.shields.io/github/stars/haixiangyan/leetcode-python?style=flat-square",
    ],
    links: [
      { content: "https://www.lintcode.com/user/Haixiang", image: lintcode },
      { content: "https://leetcode.com/HaixiangYan/", image: leetcode },
      {
        content: "https://github.com/haixiangyan/leetcode-python",
        image: github,
      },
    ],
    techUsed: [{ content: "Python", image: python }],
  },
  {
    logo: weixin,
    title: "仿微信记账本",
    badges: [
      "https://img.shields.io/github/stars/haixiangyan/weixin-cash?style=flat-square",
    ],
    links: [
      { content: "https://github.yanhaixiang.com/weixin-cash/#/", image: link },
      { content: "https://github.com/haixiangyan/weixin-cash", image: github },
    ],
    techUsed: [
      { content: "React.js", image: react },
      { content: "Styled-Components", image: styledComponents },
      { content: "TypeScript", image: ts },
      { content: "Babel", image: babel },
      { content: "Webpack", image: webpack },
    ],
  },
  {
    logo: tenet,
    title: "Tenet",
    badges: [
      "https://img.shields.io/github/stars/haixiangyan/tenet?style=flat-square",
      "https://img.shields.io/visual-studio-marketplace/i/HaixiangYan.tenet?style=flat-square",
      "https://img.shields.io/visual-studio-marketplace/stars/HaixiangYan.tenet",
    ],
    links: [
      {
        content:
          "https://marketplace.visualstudio.com/items?itemName=HaixiangYan.tenet",
        image: vscode,
      },
      { content: "https://github.com/haixiangyan/tenet", image: github },
    ],
    techUsed: [{ content: "TypeScript", image: ts }],
  },
  {
    logo: jest,
    title: "node-autodoc",
    badges: [
      "https://img.shields.io/github/stars/haixiangyan/node-autodoc?style=flat-square",
      "https://coveralls.io/repos/github/Haixiang6123/node-autodoc/badge.svg?branch=main",
      "https://img.shields.io/npm/dm/node-autodoc?style=flat-square",
    ],
    links: [
      { content: "https://www.npmjs.com/package/node-autodoc", image: npm },
      {
        content: "https://github.com/haixiangyan/node-autodoc",
        image: github,
      },
    ],
    techUsed: [
      { content: "Eslint", image: eslint },
      { content: "JavaScript", image: js },
      { content: "Jest", image: jest },
      { content: "Travis CI", image: travis },
    ],
  },
])


</script>

<style scoped lang="scss">
.project {
  box-sizing: border-box;
  padding: 60px 30px;
  background-color: #0d1b2a;
  text-align: center;
  color: #fff;

  .info {
    font-weight: bold;
    font-size: 1.5em;

    .title {
      font-size: 2em;
    }
  }

  .project-box {
    padding: 24px;

    .project-item {
      background-color: #fff;
      border-radius: 6px;
      padding: 20px;
      text-align: center;
      box-sizing: border-box;
      color: #0d1b2a;

      .logo {
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
      }

      .title {
        font-size: 1.5em;
        font-weight: bold;
      }

      .badges {
        margin-top: 10px;

        img {
          margin-right: 10px;
        }
      }

      .link {
        margin-top: 20px;

        a {
          padding: 0 10px;
        }

        img {
          width: 38px;
          height: 38px;
        }
      }

      .stack {
        margin-top: 20px;
        font-size: 1.2em;
        font-weight: bold;
        color: #0d1b2a;

        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          padding: 20px 0;
          width: 66%;
          border-top: 1px solid #808182;
        }

        img {
          width: 32px;
          height: 32px;
          padding: 10px;
        }
      }


    }


  }
}
</style>
