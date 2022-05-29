<template>
  <section id="project" class="project">
    <div class="info">
      <p class="title">个人项目</p>
      <p>随便写写好玩有意思的项目💎</p>
    </div>
    <div class="project-list">

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
function getRandomHeight(min = 600, max = 900) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


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

  .project-list {}
}
</style>
