<template>
    <div>
        <div class="page-wrap"> 

   <mt-tab-container class="page-tabbar-container" v-model="selected">  
        <mt-tab-container-item id="早上">  
             &nbsp;
        <div class="logo">
            <p class="mint-home-desc">站班会信息表</p>
            </div>
            <div class="page-indexlist">
                <div class="page-indexlist-wrapper">  
                <mt-field label="计划完成比例" placeholder="请输入计划完成比例" type="tel" width="200px" v-model="userphone"></mt-field>
                </div>
                &nbsp;
                <mt-button size="large" @click="actionSheet1">点击上传站班会照片</mt-button>
              &nbsp;<pre></pre>
               <div class="page-button-group">
          &nbsp;
        <mt-button plain size="large" type="primary" @click="login">提交</mt-button>
         &nbsp;
        <mt-button plain size="large" type="danger">取消</mt-button>
      </div>
                <gfooter></gfooter>
            </div>
        </mt-tab-container-item>  
        <mt-actionsheet  
        :actions= "actions1"  
        v-model="sheetVisible1"
        :closeOnClickModal="closeOnClickModal">  
    </mt-actionsheet> 
        <mt-tab-container-item id="晚上">  
           &nbsp;
        <div class="logo">
            <p class="mint-home-desc">站班会信息表</p>
            </div>
            <div class="page-indexlist">
                <div class="page-indexlist-wrapper">  
                <mt-field label="实际完成比例" placeholder="请输入实际完成比例" type="tel" width="200px" v-model="userphone"></mt-field>
                </div>
                &nbsp;
                <mt-button size="large" @click="actionSheet1">点击上传站班会照片</mt-button>
              &nbsp;<pre></pre>
               <div class="page-button-group">
          &nbsp;
        <mt-button plain size="large" type="primary" @click="login">提交</mt-button>
         &nbsp;
        <mt-button plain size="large" type="danger">取消</mt-button>
      </div>
                <gfooter></gfooter>
            </div>
        </mt-tab-container-item>  
      </mt-tab-container> 
            
            <mt-tabbar v-model="selected" fixed>  
            <mt-tab-item id="早上">  
            <img slot="icon" src="../../assets/tabbardefault.png">  
            早上 
            </mt-tab-item>  
            <mt-tab-item id="晚上">  
            <img slot="icon" src="../../assets/tabbardefault.png"> 
            晚上  
            </mt-tab-item>  
            </mt-tabbar>  
        </div>
         
    </div>
</template>
<script>
export default {
  data(){
    return {
        userphone: '',
           closeOnClickModal: false,
      selected: '早上',
  
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
  font-size:20px;
  text-align: center;
  font-family:"Hiragino Sans GB"; 
  color: brown;
}
.page-picker-desc{
    text-align: center;
}
</style>

