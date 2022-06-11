<template>
  <div class="footer">
    <p style="text-align: center; padding: 20px;">第三次重改个人主页成功 🙌， 使用了:</p>
    <div class="icons">
      <img v-for="(item, index) in techs" :key="index" :src="item.image" :alt="item.content">
    </div>
    <p>
      <a rel="noreferrer" target="_blank" href="https://beian.miit.gov.cn/">
        粤ICP备2021095802号
      </a>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// 图标
import react from "@/assets/icons/react.png";
import antd from "@/assets/icons/antd.png";
import eslint from "@/assets/icons/eslint.png";
import ts from "@/assets/icons/ts.png";
import sass from "@/assets/icons/sass.png";

const techs = ref([
  {
    content: "React.js",
    image: react,
  },
  {
    content: "TypeScript",
    image: ts,
  },
  {
    content: "Eslint",
    image: eslint,
  },
  {
    content: "Antd",
    image: antd,
  },
  {
    content: "Sass",
    image: sass,
  },
]);
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(88, 12, 12);
  color: #fff;

  .icons {
    img {
      width: 32px;
      height: 32px;
      padding: 0 10px;
    }
  }
}
</style>
