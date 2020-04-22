<template>
  <div class="bg">
    <div class="login-card">
      <h1 class="title-style">后台管理系统</h1>
      <el-input
        placeholder="请输入帐号"
        class="login-input"
        v-model="mobileInput"
        clearable
      ></el-input>
      <el-input
        placeholder="请输入密码"
        class="login-input"
        v-model="passwordInput"
        show-password
      ></el-input>
      <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="同意用户协议"
        class="cc-mtop"
        style="margin-left:-52%"
      >
      </el-switch>
      <div class="cc-df cc-mtop">
        <el-input
          placeholder="请输入验证码"
          class="code-input"
          v-model="codeInput"
          clearable
        ></el-input>
        <el-button
          type="primary"
          plain
          class="btn1-login"
          @click="codePhoto()"
        >获取验证码</el-button>
        <img
          class="verify"
          ref="codeImg"
        />
      </div>
      <div class="cc-df cc-mtop">
        <el-button
          type="primary"
          plain
          class="btn-login"
          @click="submit()"
        >提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      mobileInput: '',
      passwordInput: '',
      codeInput: '',
      value: true
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    openSimpleDialog() {
      this.openSimple = true
    },
    closeSimpleDialog() {
      this.openSimple = false
    },
    codePhoto() {
      this.$axios({
        method: 'get',
        url: this.GLOBAL.baseUrl + 'captcha/' + this.mobileInput,
        // headers:{},
        responseType: 'blob'
      })
        .then((res) => {
          var img = this.$refs.codeImg
          let url = window.URL.createObjectURL(res.data)
          img.src = url
          //取得后台通过响应头返回的sessionId的值
          this.token = res.headers['access-token']
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    submit() {
      this.$axios({
        method: 'post',
        url: this.GLOBAL.baseUrl + 'sysAdmin/login',
        data: {
          name: this.mobileInput,
          password: this.passwordInput,
          verifyCode: this.codeInput
        }
      })
        .then((res) => {
          localStorage.setItem('token', res.data.data)
          this.$store.commit('setToken', res.data.data)
          this.user()
          this.menu()
          if (res.data.msg == '成功') {
            this.$router.push('/')
          }
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    user() {
      this.$axios({
        method: 'get',
        url: this.GLOBAL.baseUrl + 'sysAdmin/' + this.mobileInput
      })
        .then((res) => {
          alert(1)
          console.log(res)
          this.users = res.data.data[0]
          console.log(this.users)
          localStorage.setItem('user', JSON.stringify(this.users))
          this.$store.commit('setUser', this.users)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    menu() {
      this.$axios({
        method: 'get',
        url: this.GLOBAL.baseUrl + 'roleMenu/all/' + this.mobileInput
      })
        .then((res) => {
          this.menuLists = res.data.data[0].Menus
          console.log(this.menuLists)
          localStorage.setItem('menuLists', JSON.stringify(this.menuLists))
          this.$store.commit('setMenuLists', this.menuLists)
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.bg {
  background-image: url('https://niit-student.oss-cn-beijing.aliyuncs.com/markdown/polygon-2560x1440-4k-hd-wallpaper-orange-red-blue-background-pattern-225.jpg');
  // opacity: 0.9;
  height: 100vh;
  display: flex;
  justify-content: center;
}
.login-card {
  // background-color: whitesmoke;
  width: 30%;
  height: 45%;
  margin-top: 12%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  border: 2px solid #fff;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(233, 227, 227, 0.5);
}
.login-input {
  width: 80%;
  margin-top: 5.5%;
}
.btn-login {
  width: 100px;
  height: 40px;
}
.btn1-login {
  width: 100px;
  height: 40px;
  margin-left: 10px;
}
.code-input {
  width: 40%;
  margin-left: 30px;
}
.address {
  margin-left: 200px;
}
.title-style {
  margin-top: 60px;
}
.verify {
  margin-left: 10px;
  width: 90px;
  height: 40px;
}
</style>
