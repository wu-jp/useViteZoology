<script setup lang="ts">
import { useMouse } from '@vueuse/core';

const { x, y } = useMouse();
</script>

<template>
  <h1>index</h1>

  <h2>测试 vueUse 的鼠标坐标</h2>
  <h3>Mouse: {{ x }} - {{ y }}</h3>
</template>

<style scoped></style>
