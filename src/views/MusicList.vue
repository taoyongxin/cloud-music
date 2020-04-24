<template>
  <div class="cc-donghua position-style">
    <div class="cc-col-center">
      <h1 class="cc-mbottom">歌单管理</h1>
      <myMusic></myMusic>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classes: [],
      musics: [],
      page: 1,
      authority: this.$store.state.authority,
      items: this.$store.state.menuLists
    }
  },
  components: {
    myMusic: require('../components/MyMusic').default
  },
  created() {
    this.selectMusic()
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {
    currentSong() {
      //监听正在播放的歌曲改变
      this.$nextTick(() => {
        this.$refs.audio.play()
        console.log(this.$refs.audio.duration) //此时duration为NaN
      })
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 70%;
  margin: auto;
  background-color: white;
  border: 1px black solid;
}
.card-left {
  border-right: 1px black solid;
}
.btn-size {
  width: 60px;
  height: 20px;
}
.input-size {
  width: 50px;
}
.position-style {
  margin-top: 60px;
  margin-left: 500px;
}
</style>
