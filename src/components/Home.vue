<template>
  <section id="home" class="home">
    <div class="box">
      <div class="one">
        <p>我是吴一，</p>
        <p>一只厦门前端开发，</p>
        <p>React、Vue都写点，</p>
        <p>喜欢设计🎆，</p>
        <p>玩玩游戏。</p>
      </div>
      <div class="two">
        <img src="@/assets/logo.jpg" alt="">
      </div>
      <div class="three">
        <a href="#about">
          <n-icon size="60">
            <ArrowDownOutline />
          </n-icon>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowDownOutline } from '@vicons/ionicons5';
</script>

<style scoped lang="scss">
.home {
  box-sizing: border-box;
  padding: 60px 30px;
  height: 100vh;
  background-image: url('../assets/home.e93ec0a0.svg');
}

.box {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;

  .one {
    box-sizing: border-box;
    padding: 10rem 0 0 2rem;
    flex: 0 0 65%;

    p {
      font-size: 4em;
      line-height: 1.5em;
      font-weight: bold;
    }
  }

  .two {
    box-sizing: border-box;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 35%;

    img {
      width: 100%;
    }
  }

  .three {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 100%
  }
}
</style>
