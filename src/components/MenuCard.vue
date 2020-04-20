<template>
  <div class="Menu-card cc-df">
       <i :class="item.icon"></i>
       <router-link :to="item.url">
           <p><b>{{item.title}}</b></p>
       </router-link>
       
  </div>
</template>

<script>
export default {
  name: "MenuCard",
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
.Menu-card{
    width: 100%;
    height: 20px;
    margin-top: 20px;
    padding-top: 10px;
    padding-left: 20px;
}
.Menu-card p{
    font-size: 17px;
}
.Menu-card i{
    font-size: 22px;
    margin-right: 10px;
}
</style>
