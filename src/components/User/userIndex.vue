<template>
  <div id="user">
    <el-row>
      <el-col :span="20"><h4>这是用户模块</h4></el-col>
      <el-col :span="4"><el-button type="primary" @click="_logout">退出登录</el-button></el-col>
  </el-row>
    <el-row>
      <el-col :span="4">
        <el-menu default-active="1" class="el-menu-vertical" theme="dark" @select="handleSelect"
        @open="handleOpen" @close="handleClose">
          <el-menu-item index="1"><i class="el-icon-menu"></i>导航一</el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-submenu>
          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'userIndex',
  data () {
    return {

    }
  },
  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
        case '1':
          this.$router.push('/user')
          break;
        case '3':
          this.$router.push('/userList')
          break;
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    _logout(){
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
  #user{
    .el-menu-vertical{
      display: inline-block;
      text-align: left;
      width: 200px;
      min-height: 800px
    }
  }
</style>
