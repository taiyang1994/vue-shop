<template>
  <div class="menu">
     <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
              default-active="0"
              class="el-menu-vertical-demo" :router="true">
            <el-submenu :index="item.id+''" v-for="(item,i) in menuList" :key="item.id">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.authName}}</span>
              </template>
                <el-menu-item :index="'/'+subItem.path" v-for="(subItem,j) in item.children"       :key="subItem.id">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span> {{i+'-'+j}}  {{subItem.authName}}</span>
                  </template>
                </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data: function () {
    return {
      menuList: []
    }
  },
  mounted () {
    this.$http.get('menus').then(({ data: res }) => {
      console.log(res)
      this.menuList = res.data
    })
  }
}
</script>
