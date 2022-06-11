<template>
  <section id="about" class="about">
    <div class="info">
      <p class="title">关于</p>
      <p>哈喽，我是吴一 😜</p>
      <p>聊聊我自己</p>
    </div>
    <div class="info-summarize">
      <p>一只前端开发，江西九江人，目前在厦门某小公司搬砖。</p>
      <br>
      <p>高考结束后，在本省一所专科院校学设计专业。毕业后，接触到前端开发，并通过网课学习成功拿到第一份前端实习工作。喜欢尝试各种新技术、也熬了不少夜。</p>
    </div>

    <div class="info-summarize">
      <p>有一些自己的小想法，通过代码实现。喜欢有设计感的东西，喜欢玩LOL、王者。</p>
    </div>

    <div class="steps">
      <div class="steps-item">
        <n-button color="#c9184a" text-color="#fff"> 1996 </n-button>
        <div class="right steps-info">
          <p>10月</p>
          <p>😎😎</p>
        </div>
      </div>
      <div class="steps-item">
        <n-button color="#c9184a" text-color="#fff"> 2015 </n-button>
        <div class="left steps-info">
          <p>高中毕业</p>
          <p>📚 在江西现代学设计专业</p>
          <p>每天玩游戏、刷剧，和同学到处玩</p>
        </div>
      </div>
      <div class="steps-item">
        <n-button color="#c9184a" text-color="#fff"> 2018 </n-button>
        <div class="right steps-info">
          <p>大学毕业</p>
          <p>⌛网课阶段</p>
        </div>
      </div>
      <div class="steps-item">
        <n-button color="#c9184a" text-color="#fff"> 2019 </n-button>
        <div class="left steps-info">
          <p>实习</p>
          <p>年初，在南昌找到一家公司</p>
        </div>
      </div>
      <div class="steps-item">
        <n-button color="#c9184a" text-color="#fff"> 2020 </n-button>
        <div class="right steps-info">
          <p>国庆节</p>
          <p>第一次来到厦门，入职目前这家公司</p>
        </div>
      </div>
      <div class="steps-item">
        <n-button color="#c9184a" text-color="#fff"> ... </n-button>
        <div class="left steps-info">
          <p>??？</p>
        </div>
      </div>
      <div class="steps-item">
        <n-button color="#c9184a" text-color="#fff"> 💀 </n-button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.about {
  box-sizing: border-box;
  padding: 60px 30px;
  background-color: #f25c54;
  color: #fff;
  text-align: center;

  .info {
    font-weight: bold;
    font-size: 1.5em;

    .title {
      font-size: 2em;
    }
  }

  .info-summarize {
    width: 60%;
    margin: 60px auto 0;
    font-size: 1em;
  }

  .steps {
    margin-top: 50px;

    .steps-info {
      width: 50%;
      box-sizing: border-box;
      padding: 20px 35px 40px;
    }

    .right {
      margin-left: 50%;
      text-align: left;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: -1px;
        width: 2px;
        height: 100%;
        background-color: #c9184a;
      }
    }

    .left {
      margin-right: 50%;
      text-align: right;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: -1px;
        width: 2px;
        height: 100%;
        background-color: #c9184a;
      }
    }
  }
}
</style>
