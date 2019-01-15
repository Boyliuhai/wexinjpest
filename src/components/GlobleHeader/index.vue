<template>
  <div id="header" class="clearfix" v-if="headerIsShow">
        <mt-button @click="goBack" class="goback">
          <img src="../../assets/zuo.jpg" height="30" width="30" slot="icon">
          返回
        </mt-button>
  </div>
</template>
<script>
export default {
  name: 'G-header',
  data(){
    return {
    }
  },
  props: {
    headerIsShow: {
      type: Boolean,
      default: true
    },
  },
  mounted(){

  },
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
  #header {
    text-align: center;
    float: left;
  }
</style>
