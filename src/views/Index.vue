<template>
  <div>
    <div class="body-style">
      <div class="card-top">
        <div class="card-top-left">
          <h1 class="h1-style">Supermodel</h1>
          <h3 class="top-h3-style">Foster the People</h3>
        </div>
        <div class="card-top-right">
          <h1 class="h1-style">Halcyon Days</h1>
          <h3 class="top-h3-style">Ellie Goulding</h3>
        </div>
      </div>
      <div class="card-mid">
        <h1 class="h1-style">Unlimited music now</h1>
        <h3 class="h3-style">Listen to your favorite artists and albums whenever and wherever, online and offline.</h3>
        <h2 class="h2-style">LISTEN NOW</h2>
      </div>
      <div class="card-bottom">
        <h1 class="h1-style">Unlimited music now</h1>
        <h3 class="h3-style">Listen to your favorite artists and albums whenever and wherever, online and offline.</h3>
        <h2 class="h2-style">LISTEN NOW</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
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
.body-style {
  width: 1200px;
  height: 700px;
  margin-left: 100px;
  margin-top: 80px;
}
.card-top {
  width: 100%;
  height: 180px;
  margin-bottom: 40px;
  display: flex;
}
.card-mid {
  width: 100%;
  height: 180px;
  background-color: pink;
  margin-bottom: 40px;
}
.card-bottom {
  width: 100%;
  height: 180px;
  background-color: rgb(185, 203, 213);
  margin-bottom: 40px;
}
.h1-style {
  color: #fff;
  padding-top: 20px;
  margin-left: 20px;
}
.h2-style {
  color: #fff;
  margin-top: 40px;
  margin-left: 20px;
  cursor: pointer;
}

.h3-style {
  color: #fff;
  margin-top: 40px;
  margin-left: 20px;
}
.card-top-left {
  flex: 0 0 48%;
  background-color: rgb(185, 203, 213);
  margin-right: 47px;
}
.card-top-right {
  flex: 0 0 48%;
  background-color: pink;
}
.top-h3-style {
  margin-left: 300px;
  margin-top: 60px;
  color: #fff;
}
</style>
