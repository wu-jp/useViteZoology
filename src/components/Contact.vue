<template>
  <section id="contact" class="contact">
    <div class="tip">找到我 🖐️</div>
    <div class="reveal">
      <div class="icon">
        <a v-for="(img, index) in contacts" :key="index" :href="img.url">
          <img :src="img.image" alt="" />
        </a>
      </div>
      <p class="text">👍求点赞，求关注，求转发，一键三连！</p>
      <p class="email">wuyioo@foxmail.com</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import juejin from "@/assets/svgs/juejin.svg";
import github from "@/assets/svgs/github.svg";
import zhihu from "@/assets/svgs/zhihu.svg";
import jianshu from "@/assets/svgs/jianshu.svg";
import overwatch from "@/assets/svgs/overwatch.svg";

const contacts = ref([
  { image: github, url: "https://github.com/Haixiang6123" },
  { image: juejin, url: "https://juejin.cn/user/272334614432887" },
  { image: zhihu, url: "https://www.zhihu.com/people/yan-hai-87-22" },
  { image: jianshu, url: "https://www.jianshu.com/u/0340be4082b5" },
  {
    image: overwatch,
    url: "https://playoverwatch.com/en-us/career/pc/Monster-14255/",
  },
]);
</script>

<style scoped lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 60px 30px;
  height: 100vh;
  // background-color: #8ecae6;
  background-attachment: fixed;
  background-color: #000;
  // background-image: url(../assets/images/contact.webp);
  background-image: url(../assets/images/2.jpg);
  background-position: 50%;
  background-size: cover;

  .tip {
    font-size: 3em;
    font-weight: bold;
    margin: 30px auto;
    text-align: center;
    color: #fff;
  }

  .reveal {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 30px 60px;
    border-radius: 6px;
    margin: 30px auto 0;
    display: inline-flex;

    .icon {
      a {
        padding: 20px;
        width: 40px;
        height: 40px;

        img {
          width: 40px;
          height: 40px;
        }
      }

    }

    .text {
      font-size: 1.2em;
      margin: 10px 0;
    }

    .email {
      font-size: 1.1em;
      color: #fff;
      background-color: rgb(115, 21, 6);
      border-radius: 3px;
      height: 60px;
      line-height: 60px;
      width: 100%;
      text-align: center;
      font-size: 1.4em;
    }
  }
}
</style>
