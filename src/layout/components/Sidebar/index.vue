<template>
  <div>
    <el-avatar
      :size="logoHeight"
      shape="square"
      class="my-avatar"
      src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
    />
    <h1 class="logo-title" v-if="$store.getters.sidebarOpened">admin</h1>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu.vue'
const logoHeight = 44
</script>

<style lang="scss" scoped>
$bg: '#2d8cf0';
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
:deep(.el-avatar) {
  background: none;
}
</style>
