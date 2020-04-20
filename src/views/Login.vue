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
        <el-button
          type="primary"
          plain
          class="btn-login"
          @click="submit()"
        >提交</el-button>
        <el-button
          type="primary"
          plain
          class="btn-login address"
          @click="clear"
        >重置</el-button>
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
    submit() {
      //模拟后端接口数据
      let user = {
        userId: '1802333117',
        username: 'Tao.',
        userRole: 'admin',
        avatar: 'https://niit-student.oss-cn-beijing.aliyuncs.com/markdown/1.jpg'
      }
      this.menuList = [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', url: '/dashboard', subMenus: [] },
        {
          title: '音乐管理',
          icon: 'mdi-music',
          url: '',
          subMenus: [
            {
              title: '歌单管理',
              icon: 'mdi-domain',
              url: '/music-list',
              permissions: []
            },
            {
              title: '歌曲管理',
              icon: 'mdi-text',
              url: '/music',
              permissions: ['music:add', 'music:edit', 'music:delete']
            }
          ]
        },
        { title: 'About', icon: 'mdi-help-box', url: '/about', subMenus: [] }
      ]
      localStorage.setItem('token', 'EcIHTAWoGrmMVvTu2LPvuL-siq6hAfieVeehl-HTe_M')
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('menuList', JSON.stringify(this.menuList))
      this.$store.commit('setToken', 'EcIHTAWoGrmMVvTu2LPvuL-siq6hAfieVeehl-HTe_M')
      this.$store.commit('setUser', user)
      this.$store.commit('setMenuList', this.menuList)
      this.$router.push('/')
    },
    clear() {
      this.$refs.form.clear()
      this.validateForm = {
        username: '',
        password: '',
        isAgree: false
      }
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
  margin-top: 20px;
  width: 100px;
  height: 40px;
}
.address {
  margin-left: 200px;
}
.title-style {
  margin-top: 60px;
}
</style>
