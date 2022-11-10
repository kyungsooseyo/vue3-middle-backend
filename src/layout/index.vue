<template>
  <div class="app-wrapper">
    <!-- 左侧menu -->
    <sidebar
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    ></sidebar>
    <div class="main-container">
      <!-- 顶部nav -->
      <div class="fixed-header">
        <navbar></navbar>
      </div>
      <!-- 内容区 -->
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import AppMain from './components/AppMain.vue'
import Sidebar from './components/Sidebar/index.vue'
// ! 需要使用css module的形式才能生效
import variables from '@/styles/variables.module.scss'
// console.log('vvv', variables);
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.module.scss';
// @import '~@/styles/vvv.scss';
@import '~@/styles/mixin.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  // ~ scss变量 要通过这种方式使用
  width: calc(100% - #{$sideBarWidth});
  transition: width #{$sideBarDuration};
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
