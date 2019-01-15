<template>
  <div class="bg" id="node1">
   <div class="logo">
      &nbsp;
       <pre> </pre>
      <p class="mint-home-desc">请确认项目名称信息</p>
    </div>
      &nbsp;
       <pre> </pre>
       <p class="page-picker-desc">请选择您所属项目：{{ projectName }}</p>
        <pre> </pre>
          <el-select v-model="value"  placeholder="请选择">
            <el-option
                 v-for="item in projectNames"
                :key="item.contractld"
                :label="item.projectName"
                 :value="item.contractld">   
            </el-option>
         </el-select>
          &nbsp;
          <pre> </pre>
          <div class="page-button-group">
            <mt-button size="large" type="primary" @click="selectproject">下一步</mt-button>
          </div>
          &nbsp;
          <pre> </pre>
  </div>
</template>

<script>

import axios from 'axios';
import { Toast } from 'mint-ui';
import { mapState } from 'vuex';
import {mapActions} from 'vuex';
import global from '@/global/gloabl.js';
const LOGIN_URL = global.SERVER_URL+'selectProject/returnProject';
export default {
  
  data () {
    return {  
projectNames:[],
        value:'',
        projectName:'',
        otherdata:[],
        contractld:'',
        projectName:'',
        
        providerCompanyName:'',
        otherproject:[],
    }
  },
  methods:{
    ...mapActions({
      setContractld:'user/setContractld'
    }),
    selectproject(){
      //保存数据
      this.setContractld(this.value);
        this.$router.push('/CheckProject');
        
      },
   
    request()
    {
      let that = this;
     	let params = {
         username:that.loginName
         };
      
       console.log(params);
     // alert(that.$store.user.name);
			axios.post(LOGIN_URL,params).then(
        function(response)
          {//如果接受成功
          that.projectNames =JSON.parse(JSON.stringify(response.data));

          }).catch(function(error){
          console.log("error = "+error);
          });
    },
    
  },
  computed:{
       ...mapState({
            loginName:state => state.user.loginName,
      })
  },
  created(){
    //alert( this.$store.user.state.name);
  let that = this;
    that.request();
  
  },
}
</script>

<style>
#node1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #502c2c;
  margin-top: 0px;
}
.bg{
  background-size: 100% 100%;
   background-color:white;
  /* background:url(../assets/050f186a5bf58b3c60dcea04921b5911.jpg) no-repeat; */
  position:absolute; left:0px; top:0px;
   width:100%; height:100%;
}
.mint-home-desc{
  font-weight:bold;
  font-size:1.5em;
  color: brown;
  font-family:"Hiragino Sans GB";
}
.page-picker-desc{
  font-weight:bold;
   font-size:1em;
  font-family:"Hiragino Sans GB";
}
</style>
