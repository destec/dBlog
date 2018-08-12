<template>
<div class="menu">
  <div class="logo">
    <a href="/">
      <img src="../assets/logo.png">
    </a>
  </div>
  <div class="nav-item">
    <router-link to="/create">
      <i class="el-icon-edit nav-item icon"></i><br>
      <span>New post</span>
    </router-link>
  </div>
  <div class="nav-item">
    <router-link to="/list">
      <i class="el-icon-tickets nav-item icon"></i><br>
      <span>My posts</span>
    </router-link>
  </div>
  <div class="nav-item">
    <router-link to="/me">
      <i class="el-icon-menu nav-item icon"></i><br>
      <span>Profile</span>
    </router-link>
  </div>
  <div class="attachment">
    <!-- <div class="attachment-item"><i class="el-icon-setting"> Settings</i></div> -->
    <div class="attachment-item"><i class="el-icon-question"> Support</i></div>
    <div class="attachment-item"><i class="el-icon-info"> Terms of use</i></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style scoped>
.logo {
  width: 10rem;
  height: 4rem;
  margin: 2rem auto;
  cursor: pointer;
}
.logo img {
  width: 100%;
}
.nav-item {
  margin: 2rem 0.6rem;
  color: white;
}
.nav-item a {
  text-decoration: none;
  color: white;
}
.nav-item .icon {
  font-size: 4rem;
}
.attachment {
  margin-top: 4rem;
}
.attachment-item {
  color: white;
  padding: 0.2rem;
}
</style>
