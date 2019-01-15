<template>
  <div id="node1">
   <div class="logo">
      <p class="mint-home-desc">青山热电有限公司原水泵站建设工程</p>
    </div>
    <el-row>
        <el-col :span="24">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
            <span class="span">烟囱基础</span>
            </div>
            <el-row>
                    <div class="text item">
                        <el-row>
                           <div class="item1">
                            {{'服务公司 :宏鑫数控机床有限公司'}}
                           </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'计划开始时间 :2018/7/1'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'计划完成时间 :2019/7/9'}}
                            </div>
                        </el-row>
                          <el-row>
                          <div class="item1">
                            {{'质量检查：已合格'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'目前完成进度 :测量放线'}}
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
            <span class="span">混凝土支架</span>
            </div>
            <el-row>
                    <div class="text item">
                        <el-row>
                           <div class="item1">
                            {{'服务公司 :宏鑫数控机床有限公司'}}
                           </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'计划开始时间 :2018/7/1'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'计划完成时间 :2019/7/9'}}
                            </div>
                        </el-row>
                          <el-row>
                          <div class="item1">
                            {{'质量检查：已合格'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'目前完成进度 :测量放线'}}
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
            <span class="span">土方回填</span>
            </div>
            <el-row>
                    <div class="text item">
                        <el-row>
                           <div class="item1">
                            {{'服务公司 :宏鑫数控机床有限公司'}}
                           </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'计划开始时间 :2018/7/1'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'计划完成时间 :2019/7/9'}}
                            </div>
                        </el-row>
                          <el-row>
                          <div class="item1">
                            {{'质量检查：已合格'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'目前完成进度 :测量放线'}}
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
            <span class="span">土方开挖</span>
            </div>
            <el-row>
                    <div class="text item">
                        <el-row>
                           <div class="item1">
                            {{'服务公司 :宏鑫数控机床有限公司'}}
                           </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'计划开始时间 :2018/7/1'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'计划完成时间 :2019/7/9'}}
                            </div>
                        </el-row>
                          <el-row>
                          <div class="item1">
                            {{'质量检查：已合格'}}
                            </div>
                        </el-row>
                        <el-row>
                          <div class="item1">
                            {{'目前完成进度 :测量放线'}}
                            </div>
                        </el-row>
                    </div>
            </el-row>
          </el-card>
        </el-col>
    </el-row>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
     
    }
  },
  methods:{
     login(){
        this.$router.push('zhanbanhui2');
    }
  }
}
</script>

<style>
.logo{
  height:15%;

    font-weight:bold;
}
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 0px;
    float: left;
  }
.item1 {
    margin-bottom: 10px;
    float: left;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
      text-align: center;
  }
#node1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #502c2c;
  margin-top: 0px;
}
.span{
    text-align: center;
      font-size: 18px;
      color:lightcoral;
}
</style>
