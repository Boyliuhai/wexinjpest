<template>
    <div>
        <div class="page-wrap"> 

   <mt-tab-container class="page-tabbar-container" v-model="selected">  
        <mt-tab-container-item id="物资出厂查询">  
                <mt-index-list>
                    <mt-index-section><p class="p">山东军辉建设集团有限公司</p>
                        <mt-cell class="mt-cell" label="钢格栅："><p class="p">已审</p>
                        </mt-cell>
                        <mt-cell class="mt-cell" label="卵石："><p class="p">已审</p>
                        </mt-cell>
                         <mt-cell class="mt-cell" label="镀锌槽钢：">已审
                        </mt-cell>
                         <mt-cell class="mt-cell" label="镀锌钢管：">已审
                        </mt-cell>
                        <mt-cell class="mt-cell" label="热镀锌圆钢：">已审
                        </mt-cell>
                         <mt-cell class="mt-cell" label="220KV支柱绝缘子："><p class="p">已审</p>
                        </mt-cell>
                        <mt-cell class="mt-cell" label="221KV耐张绝缘子串："><p class="p">已审</p>
                   </mt-cell>
                                           <mt-cell class="mt-cell" label="可否打印：">可以打印
                        </mt-cell>
                    </mt-index-section>
                          <mt-index-section><p class="p">福建集团有限公司</p>
                        <mt-cell class="mt-cell" label="钢格栅："><p class="p">未审</p>
                        </mt-cell>
                        <mt-cell class="mt-cell" label="卵石："><p class="p">已审</p>
                        </mt-cell>
                         <mt-cell class="mt-cell" label="镀锌槽钢：">已审
                        </mt-cell>
                         <mt-cell class="mt-cell" label="镀锌钢管：">未通过
                        </mt-cell>
                        <mt-cell class="mt-cell" label="热镀锌圆钢：">已审
                        </mt-cell>
                         <mt-cell class="mt-cell" label="220KV支柱绝缘子："><p class="p">未通过</p>
                        </mt-cell>
                        <mt-cell class="mt-cell" label="221KV耐张绝缘子串："><p class="p">未通过</p>
                   </mt-cell>
                                           <mt-cell class="mt-cell" label="可否打印：">不可以打印
                        </mt-cell>
                    </mt-index-section>
                        <mt-index-section><p class="p">南京国电环保科技有限公司</p>
                      <mt-cell class="mt-cell" label="钢格栅："><p class="p">未审</p>
                        </mt-cell>
                        <mt-cell class="mt-cell" label="卵石："><p class="p">已审</p>
                        </mt-cell>
                         <mt-cell class="mt-cell" label="镀锌槽钢：">已审
                        </mt-cell>
                         <mt-cell class="mt-cell" label="镀锌钢管：">未通过
                        </mt-cell>
                        <mt-cell class="mt-cell" label="热镀锌圆钢：">已审
                        </mt-cell>
                         <mt-cell class="mt-cell" label="220KV支柱绝缘子："><p class="p">未通过</p>
                        </mt-cell>
                        <mt-cell class="mt-cell" label="221KV耐张绝缘子串："><p class="p">未通过</p>
                   </mt-cell>
                        <mt-cell class="mt-cell" label="可否打印：">不可以打印
                        </mt-cell>
                    </mt-index-section>
                </mt-index-list>
              
                <gfooter></gfooter>
          
        </mt-tab-container-item>  
        <mt-tab-container-item id="物资出厂申请">  
            <div class="logo">
      <p class="mint-home-desc">物资出厂申请单</p>
    </div>
            <div class="page-field">
                <div class="page-field-wrapper">
                    <mt-field label="公司名称" placeholder="请输入公司名称" :attr="{maxlength: 10}" v-model="username"></mt-field>
                     <mt-button @click="open('picker1')" size="large"> 点击选择出厂时间</mt-button>
                    <mt-button size="large" @click="actionSheet1">点击上传照片</mt-button>
                    <div class="page-button-group">
                    <mt-checklist class="page-part first"
                    align="right"
                    title="请选择要出厂的物资"
                    v-model="value1"
                    :options="options1">
                    </mt-checklist>
                    </div>
                     <mt-button size="large" type="primary" >申请</mt-button>
                    <mt-button size="large" type="danger">重置</mt-button>
                </div>
            </div>
        </mt-tab-container-item>  
      </mt-tab-container> 
            
            <mt-tabbar v-model="selected" fixed>  
            <mt-tab-item id="物资出厂查询">  
            <img slot="icon" src="../../assets/tabbardefault.png">  
            物资出厂查询 
            </mt-tab-item>  
            <mt-tab-item id="物资出厂申请">  
            <img slot="icon" src="../../assets/tabbardefault.png"> 
            物资出厂申请  
            </mt-tab-item>  
            </mt-tabbar>  
        </div>
          <mt-datetime-picker 
        ref="picker1"
        v-model="value"
        :closeOnClickModel="false"
        @visible-change="handleVisibleChange"
        @confirm="handleChange">
      </mt-datetime-picker>
       <mt-actionsheet  
        :actions= "actions1"  
        v-model="sheetVisible1"
        :closeOnClickModal="closeOnClickModal">  
    </mt-actionsheet> 
    </div>
</template>
<script>
export default {
  data(){
    return {
         value1: [],
           closeOnClickModal: false,
        year: '暂不清楚',
        userinfo:'',
         value: null,
         username: null,
         userurl:'',
      selected: '物资出厂查询',
          actions1: [{  
        name: '拍照',  
        method : this.getCamera// 调用methods中的函数  
      }, {  
        name: '从相册中选择',   
        method : this.getLibrary// 调用methods中的函数  
      }],  
      // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏  
      sheetVisible1:false,
    }
  },
  created() {
    this.options1 = ['30°单导线铜铝过渡线夹线夹', '羊角抱箍', '膨胀螺栓','单母线固定金具','单电缆','钢筋'];
  },
  mounted(){

  },
  methods:{
      actionSheet1: function(){  
      this.sheetVisible1 = true;  
    },
    getCamera: function(){  
      Toast("打开照相机")  
    },  
    getLibrary: function(){  
      Toast("打开相册")  
    },
          onYearChange(picker, values) {
      this.year = values[0];
    },

open(picker) {
      // console.log(picker);
      this.$refs[picker].open();
    },
    handleChange(value) {
      // console.log(value);
      Toast({
        message: '已选择 ' + value.toString(),
        position: 'bottom'
      })
    },
    handleVisibleChange(isVisible) {
      // console.log('弹窗是否显示：',isVisible);
    }
  }
}
</script>
<style>
.mt-index-section{
    
    font-weight:bold;
}
.p{
      text-align: center;
}
.m{
    float:right;
}
.mt-cell{
    float: left;
    width:100%;
}
.mint-home-desc{
  font-weight:bold;
  text-align: center;
  font-family:"Hiragino Sans GB"; 
  color: brown;
}
.page-picker-desc{
    text-align: center;
}
</style>

