<template>
  <div class="bg" id="node1">
   <div class="logo">
      &nbsp;
       <pre> </pre>
      <p class="mint-home-desc">青山电厂智能管理系统</p>
    </div>
      &nbsp;
      <pre> </pre>
      &nbsp;
       <pre> </pre>
      <el-row>
      <el-col :span="1"></el-col>
      <el-col :span="19">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="90px" class="demo-ruleForm">
          <el-form-item label="账号" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
          </el-form-item>         
        </el-form>
        <div v-if="sysMsg" class="err-msg">{{sysMsg}}</div>
      </el-col>
      <el-col :span="1"></el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
        <el-button size="mini" type="success" round  @click="submitForm('ruleForm')">登陆</el-button>
        <el-button size="mini" type="danger" round @click="reset()">重置</el-button>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import global from '@/global/gloabl.js';
const LOGIN_URL = global.SERVER_URL+'user/login';
import { mapState, mapActions } from 'vuex';
export default {
  data () {
    return {
      sysMsg:'',
       ruleForm: {
          name:'',
          pass:'',
       },
        rules: {
          name: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
           pass: [
           { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 6, max: 11, message: '长度在 6 到 11 个字符', trigger: 'blur' }
          ],
        },
    }
  },
  methods:{
    ...mapActions({
      login:'auth/loginByEmail'
    }),
    
   submitForm(ruleForm){
          this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            this.login({
              userName:this.ruleForm.name,
              userPassword:this.ruleForm.pass
            }).then(res=>{
              console.log('1');
              if(res.status=='0')
              {
                console.log("res.login == "+res.status)
                this.$router.push('home')
              } 
              else 
              {
                this.sysMsg = "用户名或者密码错误！";
              }
            }).catch(err=>{
              alert("错误");
            });;       
          }
          else{
            console.log('error submit!!!');
            return false;
          }
        });
      },
     resetForm() {
         this.ruleForm.name = '';
            this.ruleForm.word = '';
      },
  }
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
  font-size:1em;
  font-family:"Hiragino Sans GB";
}
</style>
