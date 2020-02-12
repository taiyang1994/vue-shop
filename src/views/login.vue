<template>
  <div class="container">
    <el-form>
        <el-form-item>
          <el-input prefix-icon="iconfont icon-yonghu"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input prefix-icon="iconfont icon-password"></el-input>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  mounted () {
    const result = this.$http.post('login', this.loginForm).then(({ data: res }) => {
      console.log(res)
    })
    console.log(result)
  }
}
</script>

<style lang="less" scoped>
.container {
  background-color: #2b4b6b;
}
</style>
