<template>
<el-row class="container">
  <el-col :xs="{span: 20, offset: 2}" :sm="{span: 8, offset: 8}" class="login-panel">
    <h4>{{ $t('login-form-tip-title') }}</h4>
    <el-form label-position="top" label-width="80px" :model="loginForm">
      <el-form-item>
        <template>{{ $t('login-form-tip-keystore') }}</template>
        <el-input type="textarea" :rows="5" v-model="loginForm.keystore"></el-input>
      </el-form-item>
      <el-form-item>
        <template>{{ $t('login-form-tip-password') }}</template>
        <el-input v-model="loginForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item style="margin-bottom: 2rem;">
        <template>{{ $t('login-form-tip-remember') }}</template>
        <el-switch v-model="loginForm.remember" style="display: block;"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">{{ $t('login-submit-btn') }}</el-button>
        <el-button @click="clear">{{ $t('login-clear-btn') }}</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</el-row>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        keystore: '',
        password: '',
        remember: false,
      },
    };
  },
  methods: {
    submit() {},
    clear() {
      this.loginForm.keystore = '';
      this.loginForm.password = '';
      this.loginForm.remember = false;
    },
  },
};
</script>

<style>
.container {
  height: 100vh;
  background-color: #f2f6fc;
}
.login-panel {
  margin-top: 10rem;
  padding: 2rem;
  border: 1px solid #dcdfe6;
  background-color: #ffffff;
}
.el-form-item {
  margin-bottom: 0;
}
.el-form-item__label {
  font-weight: 500 !important;
  padding-bottom: 0 !important;
}
</style>
