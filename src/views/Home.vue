<template>
  <el-container>
    <el-header height="7rem">
      <el-row class="header-top">
        <el-col :xs="{span: 4, offset: 1}" :sm="{span: 4, offset: 2}">
          <a class="header-brand" href="/">
            <img src="https://tabler.github.io/tabler/demo/brand/tabler.svg" class="header-brand-img" alt="tabler logo">
          </a>
        </el-col>
        <el-col :xs="{span: 10, offset: 8}" :sm="{span: 6, offset: 10}">
          <el-dropdown placement="bottom" class="header-identifier">
            <img src="https://tabler.github.io/tabler/demo/faces/female/25.jpg" class="avatar"/>
            <span class="text">
              <span class="name">Jane Pearson</span>
              <span class="title">Administrator</span>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
      <el-row class="header-nav">
        <el-col :xs="{span: 24, offset: 0}" :sm="{span: 20, offset: 2}">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <!-- <el-menu-item index="1">New Post</el-menu-item> -->
            <el-menu-item index="1">My Posts</el-menu-item>
            <el-menu-item index="2"></el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <div class="clearfix"></div>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, path) {
      // console.log(key, path);
    },
  },
};
</script>

<style>
.header-top {
  padding: 1rem 0;
  border-bottom: 1px solid #dcdfe6;
}
.header-nav {
  border-bottom: 1px solid #dcdfe6;
}
.header-brand {
  padding: 0;
  transition: 0.3s opacity;
}
.header-brand-img {
  height: 2rem;
}
.header-notification {
  font-weight: 600;
  font-size: 1.25rem;
  white-space: nowrap;
  line-height: 2rem;
}
.header-identifier {
  float: right;
}
.header-identifier .avatar {
  display: inline-block;
  height: 2rem;
  border-radius: 50%;
}
.header-identifier .text {
  display: inline-block;
  margin-left: 0.5rem;
}
.header-identifier .text .name {
  font-size: 1rem;
  font-weight: 500;
}
.header-identifier .text .title {
  display: block;
  font-size: 0.5rem;
}
.clearfix {
  overflow: auto;
  _height: 1%;
}
.el-header {
  padding: 0 !important;
}
.el-menu.el-menu--horizontal {
  border: none !important;
}
</style>
