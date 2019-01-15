<template>
  <div>
    <gheader :examplename="examplename"></gheader>
    <div class="page-navbar">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">步骤一</mt-tab-item>
        <mt-tab-item id="2">步骤二</mt-tab-item>
        <mt-tab-item id="3">步骤三</mt-tab-item>
      </mt-navbar>
   <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="page-picker">
          &nbsp;
            <p class="page-picker-desc">项目选取：{{ year1 }}</p>
            <div class="page-picker-wrapper">
            <mt-picker :slots="yearSlot1" @change="onYearChange1"
            :visible-item-count="3"></mt-picker>
            </div>
          &nbsp;
          <p class="page-picker-desc">服务公司选取：{{ year2 }}</p>
            <div class="page-picker-wrapper">
            <mt-picker :slots="yearSlot2" @change="onYearChange2"
            :visible-item-count="3"></mt-picker>
            </div>
          </div>
         &nbsp;<pre> </pre>
          <div class="page-button-group">
          <mt-button size="large" type="primary" >确定</mt-button>
          <mt-button size="large" type="danger">重置</mt-button>
          </div>
      </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="page-field-wrapper">
                <div class="page-part">
                  <mt-field label="姓名" placeholder="请输入姓名" :attr="{maxlength: 10}" v-model="username"></mt-field>
                    <mt-radio class="page-part"
                    title=""
                    v-model="value1"
                    :options="options1">
                  </mt-radio>
                  <mt-field label="身份证号" placeholder="请输入身份证" type="password" v-model="userpwd"></mt-field>
                  <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="userphone"></mt-field>
               <mt-field label="出生年月" placeholder="请输入生日" type="date" v-model="userdate"></mt-field>
                 &nbsp;
                     <mt-button @click="open('picker1')" size="large"> 点击请选择入厂日期</mt-button>
                       &nbsp;
              <div class="page-button-group">
                   &nbsp;
              <mt-button size="large" type="primary" >确定</mt-button>
              <mt-button size="large" type="danger">重置</mt-button>
              </div>
              </div>
          </div>
        </mt-tab-container-item>
            <mt-tab-container-item id="3">
            <mt-button size="large" @click="actionSheet1">点击上传头像</mt-button>
            <p class="page-picker-desc">工种选择：{{number}}</p>
            <mt-picker :slots="numberSlot" @change="onNumberChange"
              :visible-item-count="1">点击选择工种
            </mt-picker>

            <mt-radio align="right"
              class="page-part"
              title=""
              label-width="0px" 
              v-model="value3"
              :options="options3">
            </mt-radio>
             <mt-field label="证件编号" label-width="200px" placeholder="请输入证件编号" type="number" v-model="usernum"></mt-field>
              <pre></pre>
            <mt-button size="large" @click="actionSheet1">点击上传体检报告</mt-button>
            <div class="page-button-group">
              &nbsp;
              <pre></pre>
              <mt-button size="large" type="primary" >确定</mt-button>
              <mt-button size="large" type="danger">重置</mt-button>
            </div>
        </mt-tab-container-item>
     </mt-tab-container>
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
      &nbsp;
    </div>
     <gfooter v-show="!sheetVisible1"></gfooter>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  name: 'Navbar',
   name: 'Picker',
  data() {
    return {
        closeOnClickModal: false,
      // action sheet 选项内容  
      actions1: [{  
        name: '拍照',  
        method : this.getCamera// 调用methods中的函数  
      }, {  
        name: '从相册中选择',   
        method : this.getLibrary// 调用methods中的函数  
      }],  
      // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏  
      sheetVisible1: false,
      value1:'',
      value:null,
        value2: null,
         value3: '',
           visible: false,
         visible2: false,
      examplename: 'Navbar',
     examplename: 'Picker',
      selected: '1',
      year1: '',
      year2:'',
      yearSlot1: [{
        flex: 1,
        values: ['#13、#14临时烟囱安装施工', '炉内升降平台施工项目', '空凝器、除雾器清洗', '除灰脱硫部盘踞拆除更换', '燃料供应部配电室盘踞更换',],
        className: 'slot1'
      }],
       yearSlot2: [{
        flex: 1,
        values: ['江苏能建机电实业集团有限公司', '路外山东军辉建设集团', '武汉虹能力设备有限公司', '锅炉改湖北华雄维斯环保工程有限公司', '湖北万全佳鑫建设工程有限公司'],
        className: 'slot2'
      }],
       username: '',
      useremail: '',
      userpwd: '',
      userphone: '',
       number: '',
        numberSlot: [{
        flex: 1,
        defaultIndex: 0,
        values: ['土工', '木工', '瓦工', '维修工', '电工', '泥土工', '维护工'],
        className: 'slot1'
      }],
  }
  },
    created() {
    this.options1 = ['男', '女',];
    this.options3 = ['特种作业', '非特种作业',];
    },
  methods: {
    onNumberChange(picker, values) {
      this.number = values[0];
    },
    actionSheet1: function(){  
      this.sheetVisible1 = true;  
    },
    getCamera: function(){  
      Toast("打开照相机")  
    },  
    getLibrary: function(){  
      Toast("打开相册")  
    } ,
    onYearChange1(picker, values) {
      this.year1 = values[0];
    },
     onYearChange2(picker, values) {
      this.year2 = values[0];
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
    },
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

