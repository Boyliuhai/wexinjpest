<template>
  <div id="node1">
      &nbsp;
   <div class="logo">
      <p class="mint-home-desc">站班会管理</p>
    </div>
       &nbsp;
      
        <div class="logo">
      <p class="mint-home-desc">请选择工程名称</p>
    </div>
        <div class="page-picker-wrapper">
        <mt-picker :slots="yearSlot" @change="onYearChange"
        :visible-item-count="3"></mt-picker>
      </div>
        &nbsp;
      <p class="page-picker-desc">工程：{{ year }}</p>
 &nbsp;
  <pre> </pre>
     <div class="page-button-group">
          &nbsp;
        <mt-button plain size="large" type="primary" @click="login">提交</mt-button>
         &nbsp;
        <mt-button plain size="large" type="danger">取消</mt-button>
      </div>
     </div>
</template>
<script>
export default {
  data () {
    return {
         year: '国电青山热电有限公司原水泵站建设工程',
          yearSlot: [{
        flex: 1,
        values: ['国电青山热电有限公司原水泵站建设工程', '炉内升降平台施工项目', '#13、14炉临时烟囱安装施工', '2018年度脚手架维保项目', '#12、13、14炉吹灰器检修工程', '#13炉湿式电除尘器改造', ],
        className: 'slot1'
      }],
    }
  },
  methods:{
   onYearChange(picker, values) {
      this.year = values[0];
    },
    login(){
        this.$router.push('zhanbanhui1');
    }

  }
}
</script>

<style>
.logo{
  height:15%;

    font-weight:bold;
}
#node1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #502c2c;
  margin-top: 0px;
}
</style>
