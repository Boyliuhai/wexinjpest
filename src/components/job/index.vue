<template>
  <div id="node1">
   <div class="logo">
      <p class="mint-home-desc">作业管理</p>
    </div>
    <gheader :examplename="examplename"></gheader>
    <div class="page-navbar">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">申请中</mt-tab-item>
        <mt-tab-item id="2">执行中</mt-tab-item>
      </mt-navbar>
   <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="page-picker">
          <el-row>
        <el-col :span="24">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
            <span class="span">脚手架申请</span>
            </div>
            <el-row>
                    <div class="text item">
                        <el-row>
                           <div class="item1">
                            {{'项目名称 :除灰脱硫部盘柜拆除更换'}}
                           </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'项目内容 :除灰脱硫部盘柜拆除更换，拆除的旧未放到具体指定区域'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'甲方负责人 :付献忠'}}
                            </div>
                        </el-row>
                          <el-row>
                          <div class="item1">
                            {{'甲方联系方式 :13545653545'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'服务商名称 :武汉楚天电气有限公司'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'项目经理名称 :刘明'}}       
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">  
                            {{'项目经理联系方式 :15465329875'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'在场服务人数 :15'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'计划开始时间 :2018/08/03'}}
                            </div>
                        </el-row>
                          <el-row>
                          <div class="item1">
                            {{'计划结束时间 :2018/09/08'}}
                            </div>
                        </el-row>
                    </div>
            </el-row>
          </el-card>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
            <span class="span">占道申请</span>
            </div>
            <el-row>
                    <div class="text item">
                        <el-row>
                           <div class="item1">
                            {{'项目名称 :除灰脱硫部盘柜拆除更换'}}
                           </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'项目内容 :除灰脱硫部盘柜拆除更换，拆除的旧未放到具体指定区域'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'甲方负责人 :付献忠'}}
                            </div>
                        </el-row>
                          <el-row>
                          <div class="item1">
                            {{'甲方联系方式 :13545653545'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'服务商名称 :武汉楚天电气有限公司'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'项目经理名称 :刘明'}}       
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">  
                            {{'项目经理联系方式 :15465329875'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'在场服务人数 :15'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'计划开始时间 :2018/08/03'}}
                            </div>
                        </el-row>
                          <el-row>
                          <div class="item1">
                            {{'计划结束时间 :2018/09/08'}}
                            </div>
                        </el-row>
                    </div>
            </el-row>
          </el-card>
        </el-col>
    </el-row>
          </div>
      </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="page-field-wrapper">
                <div class="page-part">
                 
       <el-row>
        <el-col :span="24">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
            <span class="span">脚手架申请</span>
            </div>
            <el-row>
                    <div class="text item">
                        <el-row>
                           <div class="item1">
                            {{'项目名称 :除灰脱硫部盘柜拆除更换'}}
                           </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'项目内容 :除灰脱硫部盘柜拆除更换，拆除的旧未放到具体指定区域'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'甲方负责人 :付献忠'}}
                            </div>
                        </el-row>
                          <el-row>
                          <div class="item1">
                            {{'甲方联系方式 :13545653545'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'服务商名称 :武汉楚天电气有限公司'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'项目经理名称 :刘明'}}       
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">  
                            {{'项目经理联系方式 :15465329875'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'在场服务人数 :15'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'计划开始时间 :2018/08/03'}}
                            </div>
                        </el-row>
                          <el-row>
                          <div class="item1">
                            {{'计划结束时间 :2018/09/08'}}
                            </div>
                        </el-row>
                    </div>
            </el-row>
          </el-card>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
            <span class="span">占道申请</span>
            </div>
            <el-row>
                    <div class="text item">
                        <el-row>
                           <div class="item1">
                            {{'项目名称 :除灰脱硫部盘柜拆除更换'}}
                           </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'项目内容 :除灰脱硫部盘柜拆除更换，拆除的旧未放到具体指定区域'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'甲方负责人 :付献忠'}}
                            </div>
                        </el-row>
                          <el-row>
                          <div class="item1">
                            {{'甲方联系方式 :13545653545'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'服务商名称 :武汉楚天电气有限公司'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'项目经理名称 :刘明'}}       
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">  
                            {{'项目经理联系方式 :15465329875'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'在场服务人数 :15'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'计划开始时间 :2018/08/03'}}
                            </div>
                        </el-row>
                          <el-row>
                          <div class="item1">
                            {{'计划结束时间 :2018/09/08'}}
                            </div>
                        </el-row>
                    </div>
            </el-row>
          </el-card>
        </el-col>
    </el-row>
              </div>
          </div>
        </mt-tab-container-item>
     </mt-tab-container>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  name: 'Navbar',
   name: 'Picker',
  data() {
    return {
            visible: false,
            visible2: false,
            examplename: 'Navbar',
            examplename: 'Picker',
            selected: '1',

  }
  },
    created() {
    
    },
  methods: {

  }
}
</script>
<style>
.page-picker-desc{
   font-weight:bold;
   font-size:17px;
   color: brown;
     text-align: center;
}
</style>

