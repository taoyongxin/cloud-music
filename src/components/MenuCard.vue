<template>
  <div class="Menu-card cc-df">
    <i :class="item.icon"></i>
    <div v-if="item.path!=null">
      <router-link :to="item.path">
        <p><b>{{item.title}}</b></p>
      </router-link>
    </div>
    <div v-if="item.path==null">
      <p><b>{{item.title}}</b></p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MenuCard',
  props: ['item'],
  data() {
    return {}
  },
  components: {},
  created() {
    console.log(this.item.title)
  },
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
.Menu-card {
  width: 100%;
  height: 20px;
  margin-top: 20px;
  padding-top: 10px;
  padding-left: 20px;
}
.Menu-card p {
  font-size: 17px;
}
.Menu-card i {
  font-size: 22px;
  margin-right: 10px;
}
</style>
