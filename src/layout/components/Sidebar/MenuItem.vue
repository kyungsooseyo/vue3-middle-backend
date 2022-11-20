<template>
  <div class="menu-item-container">
    <!-- element icon -->
    <!-- ~ 在elementPlus中还是支持直接拿i标签来写图标 不知道vite是否可行 -->
    <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon" :size="20"></i>
    <svg-icon v-else :icon="icon"></svg-icon>
    <span>{{ title }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
