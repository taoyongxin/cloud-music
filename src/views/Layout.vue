<template>
  <div>
    <div class="navigation-style">
      <div>
        <h1 class="music-title">云音乐后台</h1>
      </div>
      <div class="nav-right">
        <router-link to="/person">
          <img
            :src="user.avatar"
            alt="头像"
            class="avatar-style"
          >
        </router-link>
        <h1 class="log-out">{{job}}</h1>
        <h1
          class="log-out"
          @click="logout()"
        >log out</h1>
      </div>
    </div>
    <!-- <router-link :to="menu.url"> -->
    <div class="cc-df">
      <div class="person-card">
        <div class="person-card-header cc-df">
        </div>
        <div class="person-card-body cc-col">
          <div
            v-for="(item,index) in items"
            :key="index"
          >
            <div
              @click="show(item.status,index)"
              class="cc-btn"
            >
              <MenuCard :item="item"></MenuCard>
            </div>
            <div
              v-for="(item1,index1) in item.subMenus"
              :key="index1"
            >
              <div v-if="item.status">
                <SubMenuCard :item1="item1"></SubMenuCard>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div style="width:800px">
        <router-view />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      user: this.$store.state.user,
      items: this.$store.state.menuLists,
      icon: 'el-icon-delete',
      authority: this.$store.state.authority,
      jobL: ''
    }
  },
  components: {
    MenuCard: require('../components/MenuCard.vue').default,
    SubMenuCard: require('../components/SubMenuCard').default
  },
  created() {
    if (this.authority == 1) {
      this.job = 'admin'
    }
    if (this.authority == 2) {
      this.job = 'editor'
    }
  },
  mounted() {
    console.log('users: ' + this.user)
    console.log(this.items)
  },
  methods: {
    logout() {
      alert('logout')
      localStorage.removeItem('token')
      this.$store.commit('setUser', null)
      this.$router.push('/login')
    },
    show(isshow1, index) {
      if (isshow1 == 0) {
        this.items[index].status = 1
      } else {
        this.items[index].status = 0
      }
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.index-header {
  background: -webkit-linear-gradient(to bottom, #7bc6cc, #be93c5);
  background: linear-gradient(to bottom, #7bc6cc, #be93c5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  opacity: 0.8;
  height: 20vh;

  padding-top: 10px;
}
.left i {
  font-size: 25px;
  margin-left: 15px;
}
.right i {
  font-size: 25px;
  margin-right: 15px;
}
.address {
  margin-left: 50px;
  margin-top: 60px;
}
.person-card {
  width: 300px;
  height: 875px;
  background-image: url('https://niit-student.oss-cn-beijing.aliyuncs.com/markdown/2.jpg');
  background-position: 40% 25%;
}

.navigation-style {
  width: 100%;
  height: 70px;
  background-color: rgb(185, 203, 213);
  display: flex;
  justify-content: space-between;
}
.music-title {
  margin-top: 25px;
  color: #fff;
  margin-left: 10px;
}
.nav-right {
  display: flex;
}
.log-out {
  margin-right: 15px;
  margin-top: 25px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}
.avatar-style {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 25px;
  margin-top: 10px;
  cursor: pointer;
}
</style>
