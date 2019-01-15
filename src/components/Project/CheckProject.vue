<template>
   <div class="all">
     
        <div class="page-wrap"> 
        <!-- <gheader></gheader> -->
         
       <pre> </pre>
          <div class="logo">

       <pre> </pre>
      <p class="mint-home-desc">外委工程管理</p>
    </div>
    <mt-index-list  class="page-indexlist-wrapper" ref="form" :v-model="form">
                 
                      <p class="p">项目管理信息表</p>
                      <mt-cell class="mt-cell" label="项目名称:">{{form.otherproject.projectName}}
                        </mt-cell>
                         <mt-cell class="mt-cell" label="项目内容:">{{form.otherproject.content}}
                        </mt-cell>
                        <mt-cell class="mt-cell" label="甲方负责人:">{{form.powerpeople}}
                        </mt-cell>
                        <mt-cell class="mt-cell" label="甲方联系方式:">{{form.powpeoplephone}}
                        </mt-cell>
                         <mt-cell class="mt-cell" label="服务商名称:">{{form.proproviders.companyName}}
                        </mt-cell>
                         <mt-cell class="mt-cell" label="项目经理名称:">{{form.proproviders.name}}
                        </mt-cell>
                        <mt-cell class="mt-cell" label="项目经理联系方式:" rows="4">{{form.proproviders.phone}}
                        </mt-cell>
                           <mt-cell class="mt-cell" label="在场服务人数:">{{form.nowworker}}
                        </mt-cell>
                    <mt-cell class="mt-cell" label="计划开始时间:">{{form.otherproject.startTime}}
                        </mt-cell>
                          <mt-cell class="mt-cell" label="计划结束时间:">{{form.otherproject.endTime}}
                        </mt-cell>
    </mt-index-list>
      &nbsp;
       <!-- <gfooter></gfooter> -->
  </div>
     </div>
</template>

<script>
import { MessageBox,Toast,Swipe } from 'mint-ui';
import axios from 'axios';
import { mapState } from 'vuex'; 
import global from '@/global/gloabl.js';
const REQUEST_URL = global.SERVER_URL+'selectProject/indata';
export default {
     name:'MessageBox',
      name:'Toast',
       name: 'Swipe',
  data () {
    return {
       form:{
            nowworker:'',
            powerpeople:'',
            powpeoplephone:'',
            proproviders:[
              {
              companyName:'',
              name:'',
              phone:'',
              }
            ],
            otherproject:[
              {
                projectName:'',
                content:'',
                startTime:'',
                endTime:'',
              }
            ],
        },
        
    }
  },
  methods:{
  request1(params){
        let that = this;
        //

        console.log(params);
        axios.post(REQUEST_URL,params).then(function(response){//如果接受成功
        that.otherdata =JSON.parse(JSON.stringify(response.data[0]));
        //返回一个数组
        console.log( that.otherdata);
        that.form.nowworker=that.otherdata.nowworker;
        // alert(that.form.nowworker);
        that.form.powerpeople=that.otherdata.powerpeople;
        //  alert(that.form.powerpeople);
        that.form.powpeoplephone=that.otherdata.powpeoplephone;
        //alert(that.form.powpeoplephone);
        //alert(that.otherdata.proproviders[0].companyName);
        that.form.proproviders.companyName=that.otherdata.proproviders[0].companyName;
        //  alert(that.form.proproviders.companyName);
        that.form.proproviders.name=that.otherdata.proproviders[0].name;
        // alert(that.form.proproviders.name);
        that.form.proproviders.phone=that.otherdata.proproviders[0].phone;
        //  alert(that.form.proproviders.phone);
        that.form.otherproject.projectName=that.otherdata.otherproject[0].projectName;
   that.form.otherproject.content=that.otherdata.otherproject[0].content;
   that.form.otherproject.startTime=that.otherdata.otherproject[0].startTime;
   that.form.otherproject.endTime=that.otherdata.otherproject[0].endTime;
 //  alert(that.form.otherproject.endTime);
            }).catch(function(error){
                console.log("error = "+error);
            });
    }
  },

  computed:{
       ...mapState({
           contractld:state => state.user.contractld,
      })
      
  },
    created(){
      //  alert(this.contractld);
       let params={
          contractId:this.contractld,
        }
      this.request1(params);
      
      }
}
</script>

<style>
.all{
 height: 100%;
}
.mint-home-desc{
  font-weight:bold;
  font-size:20px;
  text-align: center;
  font-family:"Hiragino Sans GB"; 
  color: brown;
}
.p{
    font-weight:bold;
  font-size:18px;
  color:black;
      text-align: center;
}
</style>
