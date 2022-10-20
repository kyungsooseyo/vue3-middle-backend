<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :model="loginForm"
      :rules="loginRules"
      ref="loginFormRef"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon="user"></svg-icon>
        </span>
        <el-input
          v-model="loginForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password"></svg-icon>
        </span>
        <el-input
          v-model="loginForm.password"
          placeholder="请输入密码"
          :type="passwordType"
        ></el-input>
        <span class="svg-container-eye">
          <svg-icon
            :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
            @click="onChangePwdType"
          ></svg-icon>
        </span>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="handleLogin"
          class="login-button"
          :loading="loading"
          >登录</el-button
        >
      </el-form-item></el-form
    >
  </div>
</template>

<script setup>
import SvgIcon from '@/components/SvgIcon/index.vue';
import { validatePassword } from './rule';
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex'
onMounted(() => {
  console.log("🚀 ~ file: LoginIndex.vue ~ line 45 ~ onMounted")
  // document.title = '登录';
});
const loginForm = ref({
  username: 'admin',
  password: '123456'
})
const loginFormRef = ref(null)
const loginRules = ref({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur', },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur', },
    // { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur', validator: validatePassword() }
    { message: '长度在不能小于6个字符', trigger: 'blur', validator: validatePassword() }
  ]
})
const loading = ref(false)
const store = useStore()
//- 处理密码框文本显示
const passwordType = ref('password')

const onChangePwdType = () => {
  passwordType.value = passwordType.value === 'password' ? 'text' : 'password'
}
const handleLogin = () => {
  //` 1.表单校验
  loginFormRef.value.validate((valid) => {
    console.log('valid',valid)
    if (!valid) {
      return
    } else {
      loading.value = true
      store.dispatch('user/login', loginForm.value).then(res => {
        loading.value = false
        // todo: 登录成功后的操作
        console.log("🚀 ~ file: LoginIndex.vue ~ line 88 ~ handleLogin ~ res", res)
      }).catch(err => {
        loading.value = false
      })
    }
  })
  //` 2.触发登录事件
  //` 3.登录成功后跳转到首页
}
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .title-container {
    text-align: center;
  }
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    overflow: hidden;
  }
  ::v-deep .el-form-item {
    // margin-bottom: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    color: #454545;
    background-color: rgba(0, 0, 0, 0.2);
  }
  ::v-deep .el-form-item__content {
    display: flex;
  }
  ::v-deep .el-input__inner {
    color: $cursor;
    background-color: transparent;
    border: none;
    padding: 0 10px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    &::placeholder {
      color: $light_gray;
    }
  }
  .login-button {
    width: 100%;
  }
  .svg-container {
    display: inline-block;
    margin-left: 5px;
  }
  .svg-container-eye {
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
