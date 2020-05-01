<template>
  <div>
    <img
      src="https://niit-student.oss-cn-beijing.aliyuncs.com/markdown/20200501161533.png"
      alt="修改个人信息"
      class="tag-person"
    >
    <div class="person-information">
      <div class="font-information">
        <!-- Name部分 -->
        <div class="name-style">
          <h3 class="name-font">Name</h3>
          <Input
            v-model="phoneForm.phoneNumber"
            size="large"
            class="input-style"
            placeholder="Name的值"
          />
        </div>

        <!-- password部分 -->
        <div class="password-style">
          <h3 class="password-font">Password</h3>
          <Input
            v-model="phoneForm.password1"
            size="large"
            placeholder="Password的值"
            class="input-style"
          />
        </div>

        <!-- 提交按钮 -->
        <Button
          type="warning"
          class="push-style"
          @click="istrue()"
        >修改</Button>

        <!-- 头像部分 -->
        <img
          :src="user.avatar"
          @click="avatarClick()"
          class="avatar-style"
        />
        <input
          type="file"
          @change="uploadAvatar($event)"
          ref="file"
          style="display: none;"
          id="file"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'person',
  data() {
    return {
      user: this.$store.state.user,
      authority: this.$store.state.authority,
      token: this.$store.state.token,
      result: '',
      avatar: '',
      phoneForm: {
        phoneNumber: '',
        password1: '',
        imgDataUrl: '',
        tips: null
      },
      schema: {
        phoneNumber: [{ required: true, error: '手机号不能为空' }],
        password1: [{ required: true, error: '输入密码不能为空' }],
        imgDataUrl: [{ required: true, error: '头像不能为空' }]
      },
      type: 'error'
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    validate(schema, values) {
      this.phoneForm.tips = null
      const valArr = schema
      for (const field in schema) {
        if (Object.prototype.hasOwnProperty.call(schema, field)) {
          for (const key of schema[field]) {
            if (key.required) {
              if (!values[field]) {
                valArr.tips = key.error
                this.phoneForm.tips = valArr.tips
                console.log(valArr.tips)
                return false
              }
            }
          }
        }
      }
      return true
    },
    uploadAvatar(event) {
      const OSS = require('ali-oss')
      let client = new OSS({
        region: 'oss-cn-beijing',
        accessKeyId: 'LTAI4FuNH3cQirWwhynvdCxv',
        accessKeySecret: 'TmUIP6EkFBi5c9Mrq5kysWMRsNe7x6',
        bucket: 'niit-cmj'
      })
      let timestamp = Date.parse(new Date())
      let imgUrl = 'img/' + timestamp
      var file = event.target.files[0] //获取文件流
      var url = ''
      var _this = this
      client.multipartUpload(imgUrl, file).then(function(result) {
        _this.avatar = result.res.requestUrls[0]
        _this.updateAdminInfo(_this.avatar)
      })
    },
    updateAdminInfo(url) {
      this.phoneForm.imgDataUrl = url
      console.log(this.phoneForm.imgDataUrl)
      this.$Message.success('头像上传成功')
    },
    istrue() {
      alert(this.phoneForm.imgDataUrl)
      this.validate(this.schema, this.phoneForm)
      if (this.phoneForm.tips == null) {
        this.update()
      }
      if (this.phoneForm.tips == '手机号不能为空') {
        this.$Message[this.type]({
          background: true,
          content: 'Name不能为空'
        })
      }
      if (this.phoneForm.tips == '输入密码不能为空') {
        this.$Message[this.type]({
          background: true,
          content: '输入密码不能为空'
        })
      }
      if (this.phoneForm.tips == '头像不能为空') {
        this.$Message[this.type]({
          background: true,
          content: '头像不能为空'
        })
      }
    },
    update() {
      this.$axios({
        method: 'put',
        url: this.GLOBAL.baseUrl + 'sysAdmin/update?roleId=' + this.authority,
        data: {
          id: JSON.parse(localStorage.getItem('user')).id,
          name: this.phoneForm.phoneNumber,
          avatar: this.phoneForm.imgDataUrl,
          password: this.phoneForm.password1
        },
        headers: {
          Authorization: localStorage.getItem('token'),
          id: JSON.parse(localStorage.getItem('user')).id
        }
      })
        .then((res) => {
          console.log(res.data.data)
          this.users = res.data.data
          console.log(this.users)
          localStorage.setItem('user', JSON.stringify(this.users))
          this.$store.commit('setUser', this.users)
          this.$Message.success('修改成功')
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    avatarClick() {
      this.$refs.file.click()
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.tag-person {
  width: 60%;
  margin-left: 50%;
}
.person-information {
  width: 1000px;
  height: 600px;
  margin-left: 20%;
  margin-top: 4%;
  background-color: rgb(245, 204, 106);
  box-shadow: 5px 5px 10px gray;
  padding-top: 15%;
}
.font-information {
  width: 60%;
  height: 80%;
  background-color: #fff;
  margin-left: 20%;
  box-shadow: -5px 5px 10px gray;
  padding-top: 20px;
}
.avatar-style {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 5px 5px 5px gray;
  position: absolute;
  left: 69%;
  top: 43%;
}
.input-style {
  width: 60%;
  margin-top: px;
  margin-bottom: 10px;
  margin-left: 20px;
}
.name-style {
  display: flex;
  margin-top: 50px;
  margin-left: 20px;
}
.password-style {
  display: flex;
  margin-top: 50px;
  margin-left: 20px;
}
.name-font {
  margin-top: 10px;
  margin-right: 30px;
}
.password-font {
  margin-top: 10px;
}
.push-style {
  width: 350px;
  height: 45px;
  margin-left: 18%;
  margin-top: 50px;
}
</style>
