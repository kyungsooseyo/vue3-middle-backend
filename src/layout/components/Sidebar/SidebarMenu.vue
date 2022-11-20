<template>
  <div>
    <el-menu
      :unique-opened="true"
      :background-color="cssVar.menuBg"
      :text-color="cssVar.menuText"
      :active-text-color="cssVar.menuActiveText"
      router
      :default-active="activeMenu"
    >
      <!-- <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>Navigation One</span>
        </template>
        <el-menu-item index="1-1">Option 1</el-menu-item>
        <el-menu-item index="1-2">Option 2</el-menu-item>
        <el-submenu index="1-3">
          <template #title>Option 3</template>
          <el-menu-item index="1-3-1">Option 3-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-location"></i>
        <template #title>导航2</template>
      </el-menu-item> -->
      <sidebar-item
        v-for="(item, index) in routes"
        :key="item.path"
        :route="item"
      ></sidebar-item>
    </el-menu>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem.vue'
import { useStore } from 'vuex'
const router = useRouter()
console.log(router.getRoutes())
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
console.log('路由表', routes.value)
// ~ 不要在上面的dom上写$store.getters.cssVar.menuText, 直接将store的某个getter赋值计算属性
const store = useStore()
const cssVar = computed(() => store.getters.cssVar)
// 浏览器刷新的时候 应该保持默认激活的 route包含路由信息 包括params query...
const route = useRoute()
const activeMenu = computed(() => route.path)
</script>

<style lang="scss" scoped></style>
