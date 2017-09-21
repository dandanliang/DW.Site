<template>
  <div id="app">
    <div class="nav">
      <div style='width: 1000px;margin: 0 auto;'>
        <div class="logo"><img src="./assets/img/logo5.png" style='height:50px;' alt="斗文科技"></div>
        <el-menu theme="dark" :default-active="activeIndex" :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item class="menu-right" index="/contact">联系我们</el-menu-item>
          <el-menu-item class="menu-right" index="/joinus">加入我们</el-menu-item>
          <!-- <el-menu-item class="menu-right" index="/jjcg/cases">成功案例</el-menu-item>
                                                                            <el-menu-item class="menu-right" index="/jjcg/solutions">解决方案</el-menu-item> -->
          <el-menu-item class="menu-right" index="/success">成功案例</el-menu-item>
          <el-menu-item class="menu-right" index="/solutionsk/itfw">解决方案</el-menu-item>
          <!-- <el-submenu class="menu-right" index="/about">
                                        <template slot="title">解决方案</template>
                                        <el-menu-item class="menu-left" index="/solutionsk/itfw">IT服务</el-menu-item>
                                        <el-menu-item class="menu-left" index="/solutionsk/znh">建筑智能化</el-menu-item>
                                        <el-menu-item class="menu-left" index="/solutionsk/datacenter">数据中心机房</el-menu-item>
                                        <el-menu-item class="menu-left" index="/solutionsk/system">信息系统集成</el-menu-item>
                                      </el-submenu> -->
          <el-submenu class="menu-right" index="/about">
            <template slot="title">公司介绍</template>
            <el-menu-item class="menu-left" index="/info/about">关于斗文</el-menu-item>
            <el-menu-item class="menu-left" index="/info/culture">企业文化</el-menu-item>
            <el-menu-item class="menu-left" index="/info/structure">组织结构</el-menu-item>
            <el-menu-item class="menu-left" index="/info/certificate">资质证书</el-menu-item>
            <el-menu-item class="menu-left" index="/info/partners">合作伙伴</el-menu-item>
            <el-menu-item class="menu-left" index="/info/fwkh">服务客户</el-menu-item>
          </el-submenu>
          <el-menu-item class="menu-right" index="/index">首页</el-menu-item>
        </el-menu>
      </div>
    </div>
    <transition name="bounce">
      <router-view></router-view>
    </transition>
    <dw-footer></dw-footer>
  </div>
</template>

<script>
// import booticon from "bootstrap-iconpicker"
import dwFooter from "./components/dw-footer";
export default {
  components: { dwFooter },
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
/* 清除浮动 */

.clearfix::after {
  display: block;
  content: ".";
  clear: both;

  overflow: hidden;
  font-size: 0;
  height: 0;
}

.clearfix {
  zoom: 1;
}




















































/* 公共样式开始部分 */

.fl {
  float: left;
}

.fr {
  float: right;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  /* animation: bounce-in .5s inherit; */
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.topbar {
  height: 40px;
  line-height: 40px;
  background-color: #2a3648;
}

.topbar div {
  margin: 0 auto;
  width: 1000px;
}

.topbar div a {
  float: right;
  color: #bfcbd9;
  text-decoration: none;
  font-size: 13px;
  margin-left: 10px;
}

.topbar div a i {
  margin-right: 5px;
}

.nav {
  background-color: #324157;
}

.logo {
  float: left!important;
  line-height: 60px;
  height: 60px;
  position: relative;
  z-index: 2;
}

.logo img {
  vertical-align: middle;
}

#app .el-menu {
  border-radius: 0;
}


#app .menu-right {
  float: right!important;
}

#app .menu-left {
  float: none!important;
  text-align: center;
}

#app .el-submenu .el-menu-item {
  min-width: auto!important;
}
</style>
