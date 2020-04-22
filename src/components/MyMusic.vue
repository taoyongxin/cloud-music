<template>
  <div class="card cc-df cc-mbottom">
    <div style="width:300px">
      <p>{{item.song_list_id}}</p>
    </div>
    <div
      style="width:600px"
      class="cc-btn"
    >
      <p>{{item.song_list_name}}</p>
    </div>
    <div style="width:200px; margin-left:-30px">
      <p>{{item.song_count}}</p>
    </div>
    <el-button class="cc-btn del-btn">
      <p style="margin-top:-7px">编辑</p>
    </el-button>
    <el-button class="cc-btn del-btn">
      <p style="margin-top:-7px">删除</p>
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'MyMusic',
  props: ['item'],
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
.card {
  width: 800px;
}
.img {
  width: 30px;
  height: 30px;
  margin-top: -5px;
  margin-left: 45px;
}
.del-btn {
  width: 70px;
  height: 20px;
  margin-left: 25px;
  margin-top: -3px;
}
</style>
