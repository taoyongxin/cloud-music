<template>
  <div class="cc-donghua position-style">
    <div class="cc-col-center">
      <h1>歌单管理</h1>
      <!-- <hr class="cc-mltop cc-mbottom " /> -->
      <div class="hr-style"></div>
      <div
        v-for="(item, index) in musics"
        :key="index"
      >
        <div @click="play(item.src)">
          <myMusic :item="item"></myMusic>
        </div>
      </div>
      <div>
        <audio
          :src="musicUrl"
          @play="ready"
          @pause="pause"
          ref='audioExample'
          controls
        ></audio>
      </div>
      <div class="cc-df">
        <button
          class="cc-btn btn-size"
          @click="dele()"
        >上一页</button>
        <input
          type="number"
          v-model="page"
          class="input-size cc-mright cc-mleft"
        />
        <button
          class="cc-btn btn-size"
          @click="add()"
        >下一页</button>
      </div>
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
      musicUrl: 'http://music.163.com/song/media/outer/url?id=1436753138.mp3'
    }
  },
  components: {
    myMusic: require('../components/MyMusic').default
  },
  created() {
    this.selectMusic()
  },
  mounted() {},
  methods: {
    play(music) {
      this.musicUrl = music
      var audio = this.$refs.audioExample
      audio.currentTime = 0
      audio.play()
    },
    ready() {
      console.log('play click')
    },
    pause() {
      console.log('pause click')
    },
    change1(index) {
      document.getElementById(index).style.backgroundColor = '#f0f0f0'
    },
    change2(index) {
      document.getElementById(index).style.backgroundColor = '#ffffff'
    },
    dele() {
      if (this.page > 1) {
        this.page--
        this.selectMusic()
      }
    },
    add() {
      this.page++
      this.selectMusic()
    },
    selectMusic() {
      this.$axios({
        method: 'post',
        url: this.GLOBAL.baseUrl + '/songList/all',
        data: {
          currentPage: this.page,
          pageSize: 10
        }
      })
        .then((res) => {
          this.musics = res.data.data
          console.log(this.musics)
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  },
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
  margin-top: 100px;
  margin-left: 300px;
}
.hr-style {
  width: 800px;
  height: 1px;
  background-color: #000;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
