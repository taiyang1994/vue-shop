<template>
  <div class="container">
    <el-form :model="loginForm">
        <el-form-item>
          <el-input prefix-icon="iconfont icon-yonghu" v-model="user" @input="handle"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input prefix-icon="iconfont icon-password" v-model="loginForm.password" @change="handleChange($event)"></el-input>
        </el-form-item>
    </el-form>
    <el-button @click="login">登录</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: 123456
      }
    }
  },
  computed: {
    user () {
      return this.loginForm.username + this.loginForm.password
    }
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdata () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('destroy')
  },
  methods: {
    login () {
      const result = this.$http.post('login', this.loginForm).then(({ data: res }) => {
        window.sessionStorage.setItem('token', res.data.token)
        this.$router.push('/')
      })
      console.log(result)
    },
    handle () {
      console.log(this.loginForm.username.replace('x', 'X'))
      this.loginForm.username = this.loginForm.username.replace('x', 'X')
    },
    handleChange (val) {
      console.log(val)
      this.loginForm.password = parseInt(val).toFixed(2)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  background-color: #2b4b6b;
}
</style>
