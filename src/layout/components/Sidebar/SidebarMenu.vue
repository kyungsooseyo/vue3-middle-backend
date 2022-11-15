<template>
  <div>
    <el-menu
      :unique-opened="true"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
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
      <el-menu-item index="2" >
         <i class="el-icon-location"></i>
          <template #title>导航2</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>
