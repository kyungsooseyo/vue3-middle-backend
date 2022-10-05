<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item>
        <span class="svg-container">
          <span class="svg-container">
            <svg-icon icon="https://res.lgdsunday.club/user.svg"></svg-icon>
          </span>
        </span>
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item></el-form
    >
  </div>
</template>

<script setup>
import { Avatar } from '@element-plus/icons'
import SvgIcon from '@/components/SvgIcon/index.vue';
import { ref } from 'vue';
const username = ref('');
const password = ref('');
const login = () => { }
</script>

<style scoped lang="scss" >
$bg: #2d3a4d;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login-container {
  max-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  ::v-deep .el-form-item {
    // margin-bottom: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    color: #454545;
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>
