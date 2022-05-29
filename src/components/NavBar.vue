<template>
  <section id="navbar" class="navbar">
    <span>Me</span>
    <div class="nav-right">
      <a href="#home">首页</a>
      <a href="#about">关于</a>
      <a href="#project">项目</a>
      <a href="#contact">找我</a>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  // border-bottom: 1px solid #ccc;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
  box-size: border-box;
  padding: 0 20px;
  font-weight: bold;

  span {
    font-size: 1.5em;
    color: #e63946;
  }

  .nav-right {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.5rem;
    color: #333;
    font-size: 1.2em;
  }
}
</style>
