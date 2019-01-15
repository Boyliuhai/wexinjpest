<template>
    <div>
        <div class="page-wrap"> 

   <mt-tab-container class="page-tabbar-container" v-model="selected">  
        <mt-tab-container-item id="违章查询">  
        <div class="logo">
            <p class="mint-home-desc">违章信息清单</p>
            </div>
            <div class="page-indexlist">
                <div class="page-indexlist-wrapper">
                <mt-index-list>
                    <mt-index-section><p class="p">违章1</p>
                        <mt-cell class="mt-cell" label="责任单位："><p class="p">山东军辉建设集团有限公司</p>
                        </mt-cell>
                        <mt-cell class="mt-cell" label="违章时间："><p class="p">2018年5月13日</p>
                        </mt-cell>
                         <mt-cell class="mt-cell" label="违章行为：">{{labedsa}}
                        </mt-cell>
                         <mt-cell class="mt-cell" label="整改日期：">2018年5月15日
                        </mt-cell>
                        <mt-cell class="mt-cell" label="罚款金额：">500元
                        </mt-cell>
                    </mt-index-section>
                        <mt-index-section><p class="p">违章2</p>
                        <mt-cell class="mt-cell" label="责任单位："><p class="p">山东军辉建设集团有限公司</p>
                        </mt-cell>
                        <mt-cell class="mt-cell" label="违章时间："><p class="p">2018年5月13日</p>
                        </mt-cell>
                         <mt-cell class="mt-cell" label="违章行为：">{{labedsa}}
                        </mt-cell>
                         <mt-cell class="mt-cell" label="整改日期：">2018年5月15日
                        </mt-cell>
                        <mt-cell class="mt-cell" label="罚款金额：">500元
                        </mt-cell>
                    </mt-index-section>
                        <mt-index-section><p class="p">违章3</p>
                        <mt-cell class="mt-cell" label="责任单位："><p class="p">山东军辉建设集团有限公司</p>
                        </mt-cell>
                        <mt-cell class="mt-cell" label="违章时间："><p class="p">2018年5月13日</p>
                        </mt-cell>
                         <mt-cell class="mt-cell" label="违章行为：">{{labedsa}}
                        </mt-cell>
                         <mt-cell class="mt-cell" label="整改日期：">2018年5月15日
                        </mt-cell>
                        <mt-cell class="mt-cell" label="罚款金额：">500元
                        </mt-cell>
                    </mt-index-section>
                </mt-index-list>
                </div>
                <gfooter></gfooter>
            </div>
        </mt-tab-container-item>  
        <mt-tab-container-item id="违章举报">  
            <div class="logo">
      <p class="mint-home-desc">违章举报清单</p>
    </div>
            <div class="page-field">
                <div class="page-field-wrapper">
                    <mt-field label="举报人姓名" placeholder="请输入举报人" :attr="{maxlength: 10}" v-model="username"></mt-field>
                     <mt-button @click="open('picker1')" size="large"> 点击选择举报时间</mt-button>
                <mt-field label="举报地点" placeholder="请输入举报地点" type="url" v-model="userurl"></mt-field>
                 <mt-field label="举报事项" placeholder="请输入举报事项" type="textarea" rows="2" v-model="userinfo"></mt-field>
                    <p class="page-picker-desc">滚动选择违章类型：{{ year }}</p>
                    <div class="page-picker-wrapper">
                    <mt-picker :slots="yearSlot" @change="onYearChange"
                    :visible-item-count="3"></mt-picker>
                    </div>
                    <mt-button size="large" @click="actionSheet1">点击上传照片</mt-button>
                    <div class="page-button-group">
                    &nbsp;
                
                    <mt-button size="large" type="primary" >确定</mt-button>
                    <mt-button size="large" type="danger">重置</mt-button>
                    </div>
                </div>
            </div>
        </mt-tab-container-item>  
      </mt-tab-container> 
            
            <mt-tabbar v-model="selected" fixed>  
            <mt-tab-item id="违章查询">  
            <img slot="icon" src="../../assets/tabbardefault.png">  
            违章查询 
            </mt-tab-item>  
            <mt-tab-item id="违章举报">  
            <img slot="icon" src="../../assets/tabbardefault.png"> 
            违章举报  
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
           closeOnClickModal: false,
        year: '暂不清楚',
        userinfo:'',
         value: null,
         username: null,
         userurl:'',
      selected: '违章查询',
      labedsa:'该公司在临时烟囱安装工种场',
      yearSlot: [{
        flex: 1,
        values: ['暂不清楚', '一般', '严重', '很严重', '超级严重'],
        className: 'slot1',
          }],
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

