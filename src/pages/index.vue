<script setup lang="ts">
import { useMouse, useLocalStorage, useDark, useToggle, useBrowserLocation } from '@vueuse/core';


const isDark = useDark()
const toggleDark = useToggle(isDark)

const store = useLocalStorage('dark', isDark);

const { x, y } = useMouse();
const location = useBrowserLocation();
console.log('location', location.value);
</script>

<template>
  <h1>index</h1>

  <n-button type="primary" @click="toggleDark()">
    Dark
  </n-button>

  <h2>测试 vueUse 的鼠标坐标</h2>
  <h3>Mouse: {{ x }} , {{ y }}</h3>
</template>

<style scoped>
</style>
