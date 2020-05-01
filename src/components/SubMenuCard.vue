<template>
  <div class="Menu-card cc-df">
    <Icon :type="item1.icon" />
    <div v-if="item1.path!=null">
      <router-link :to="{name: item1.path}">
        <p><b>{{item1.title}}</b></p>
      </router-link>
    </div>
    <div v-if="item1.path==null">
      <p><b>{{item1.title}}</b></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuCard',
  props: ['item1'],
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
.Menu-card {
  width: 90%;
  height: 20px;
  margin-top: 20px;
  padding-top: 10px;
  padding-left: 20px;
  margin-left: 30px;
}
.Menu-card p {
  font-size: 17px;
}
.Menu-card i {
  font-size: 22px;
  margin-right: 10px;
}
</style>
