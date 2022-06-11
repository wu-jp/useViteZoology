<script setup lang="ts">
import { useUserStore } from '@/store/user';

import NavBar from '@/components/NavBar.vue'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Project from '@/components/Project.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'


// test pinia
const userStore = useUserStore();
setTimeout(() => {
  userStore.updateName('wuyioo');
}, 3000);
</script>

<template>
  <!-- <div>{{ userStore.name }}</div> -->
  <header>
    <nav-bar></nav-bar>
  </header>

  <main>
    <home></home>
    <about></about>
    <project></project>
    <contact></contact>
  </main>
  <Footer> </Footer>
</template>

<style>
@import '@/styles/index.scss';

body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* font-family: FiraCode, Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
