<template>
  <div>
    <div class="top-style">
      <div class="card">
        <div class="small-card one-color">
          <i class="iconfont music-number-icon">&#xe636;</i>
        </div>
        <h1 class="font-style">歌单总数：588</h1>
      </div>
      <div class="card">
        <div class="small-card two-color">
          <i class="iconfont music-number-icon">&#xe636;</i>
        </div>
        <h1 class="font-style">今日新增：60</h1>
      </div>
      <div class="card">
        <div class="small-card three-color">
          <i class="iconfont music-number-icon">&#xe636;</i>
        </div>
        <h1 class="font-style">今日修改：25</h1>
      </div>
      <div class="card">
        <div class="small-card four-color">
          <i class="iconfont music-number-icon">&#xe636;</i>
        </div>
        <h1 class="font-style">今日下架：16</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicList',
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
.top-style {
  width: 1200px;
  height: 200px;
  margin-left: 100px;
  display: flex;
  margin-top: 80px;
}
.card {
  flex: 0 0 24%;
  margin-right: 15px;
  background-color: rgb(185, 203, 213);
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
.small-card {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.4);
  margin-left: 20px;
  margin-top: -30px;
}
.one-color {
  background-color: rgb(252, 152, 17);
}
.two-color {
  background-color: rgb(78, 168, 82);
}
.three-color {
  background-color: rgb(236, 75, 72);
}
.four-color {
  background-color: rgb(16, 183, 203);
}
.music-number-icon {
  font-size: 80px;
}
.font-style {
  margin-top: 40px;
  margin-left: 20px;
}
</style>
