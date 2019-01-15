<template>
  <div id="footer" v-if="footerIsShow">
    {{msg}}
  </div>
</template>
<script>
export default {
  name: 'G-footer',
  data(){
    return {
      msg: '维上智能、中国地质大学（武汉）版权所有'
    }
  },
  props: {
    footerIsShow:{
      type: Boolean,
      default: true
    }
  },
  mounted(){

  },
  methods:{

  }
}
</script>
<style scoped>
  #footer {
    font-size: 1ex;
    text-align: center;
  }
</style>
