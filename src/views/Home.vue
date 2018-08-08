<template>
  <!-- <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <el-row class="full-height">
    <el-col :span="4" class="menu">
      <Menu></Menu>
    </el-col>
    <el-col :span="20">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue';

export default {
  name: 'home',
  components: {
    Menu,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.full-height {
  height: 100vh;
}
.menu {
  height: 100vh;
  background-color: #409eff;
  text-align: center;
}
</style>