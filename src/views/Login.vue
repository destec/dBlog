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
      <el-form-item label="language">
        <template>
          <el-select v-model="language" placeholder="English" @change="changeLang">
            <el-option v-for="item in locales" :key="item.value" :value="item.language">
              <span style="float: left">{{ item.language }}</span>
              <span style="float: right;">
                <flag :iso="item.flag"></flag>
              </span>
            </el-option>
          </el-select>
        </template>
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
    const locales = this.$store.state.i18n.locales;
    const language = this.$store.state.i18n.locale.language;
    return {
      loginForm: {
        keystore: '',
        password: '',
        remember: false,
      },
      language,
      locales,
    };
  },
  methods: {
    async submit() {
      try {
        const resp = await this.$http.post(
          'http://localhost:7070/signin/ethreum',
        );
        if (resp.body.result === 'success') {
          this.$router.push('home');
        } else {
          this.$message({
            message: 'login failed',
            type: 'warning',
          });
        }
      } catch (err) {
        // console.error(err);
        this.$message({
          message: err,
          type: 'error',
        });
      }
    },
    clear() {
      this.loginForm.keystore = '';
      this.loginForm.password = '';
      this.loginForm.remember = false;
    },
    changeLang(value) {
      this.$store.dispatch('i18n/changeLocaleByLanguage', value);
      this.langFlag = this.$store.state.i18n.locale.flag;
      this.$i18n.locale = this.$store.state.i18n.locale.value;
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
