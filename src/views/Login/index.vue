<template>
  <div id="login">
   <div class="login-wrap">
     <ul class="menu-tab">
       <li v-for="(item,index) in menuTab" :key="index" :class="item.current?'current':''" @click="toggleMenu(item)">{{item.txt}}</li>
     </ul>
     <el-form :model="ruleForm" status-icon :rules="rules" ref="loginFrom" class="login-from" size="medium">
        <el-form-item prop="username" class="item-form">
          <label for="username">邮箱</label>
          <el-input id="username" type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="password" class="item-form">
          <label for="password">密码</label>
          <el-input id="password" type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item prop="passwords" class="item-form" v-if="model==='register'">
          <label for="passwords">重复密码</label>
          <el-input id="passwords" type="password" v-model="ruleForm.passwords" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item  prop="code" class="item-form">
          <label for="code">验证码</label>
          <el-row :gutter="20">
            <el-col :span="15"><el-input id="code" v-model="ruleForm.code" type="text"></el-input></el-col>
            <el-col :span="9"><el-button type="success" class="block" @click="getSms" :disabled="codeButtonStatus.status">{{codeButtonStatus.text}}</el-button></el-col>          
          </el-row>        
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="submitForm('loginFrom')" class="login-btn block" :disabled="loginButtonStatus">{{model==='login'?"登录":"注册"}}</el-button>
        </el-form-item>
      </el-form>
   </div>
  </div>
</template>

<script>
//加密
import sha1 from "js-sha1";
import { stripscript, validatePass, validateEmail, validateVCode } from '@/utils/validate';
import { Message } from 'element-ui';
import { GetSms,Login,Register } from "@/api/login"
export default {
    name:'login',
    data(){
      var checkCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }else if(validateVCode(value)){
          callback(new Error('验证码格式有误'));
        }else{
          callback();
        }
        
      };
      //验证用户名
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if(validateEmail(value)){
          callback(new Error('用户名格式有误'));
        }else{
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (validatePass(value)) {
          callback(new Error('输入密码格式不对!'));
        } else {
          callback();
        }
      };
       var validatePasswords = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入重复密码'));
        } else if (validatePass(value)) {
          callback(new Error('输入重复密码格式不对!'));
        } else {
          callback();
        }
      };
      return{
         ruleForm: {
          username: '',
          password: '',
          passwords: '',
          code: ''
        },
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
           passwords: [
            { validator: validatePasswords, trigger: 'blur' }
          ],
          code: [
            { validator: checkCode, trigger: 'blur' }
          ]
        },
        menuTab:[
          {txt:'登录',current:true,type:'login'},
          {txt:'注册',current:false,type:'register'}
        ],
        model:'login',
        codeButtonStatus:{
          status:false,
          text:'获取验证码'
        },
        loginButtonStatus:false,
      }
    },
    methods:{
      //登录注册切换
      toggleMenu(data){
        this.menuTab.forEach(el =>{
          el.current =false;
        })
        data.current =true;
        this.model = data.type;
        //清楚表单
        this.resetFromData();
      },
      resetFromData(){
        console.log(this.$refs);
        this.$refs['loginFrom'].resetFields()
      },
      //获取验证码接口
      getSms(){
        if(this.ruleForm.username==''){
           Message.error('邮箱不能为空！！!');
           return false;
        }else if(validateEmail(this.ruleForm.username)){
            Message.error('邮箱格式有误，请重新输入！！!');
        }else{
          let params={
            username:this.ruleForm.username,
            module:this.module
          }
          this.codeButtonStatus.text ='发送中';
          this.codeButtonStatus.status =true;
          //this.countDown(60);
          GetSms(params).then(res =>{
            Message.success(res.data.message);
            console.log(res);
            this.codeButtonStatus.status =false;
            //调用定时器
            this.countDown(60);

          }).catch(err =>{
            console.log(err);
          })
        }

      },
      //定时器
      countDown(val){
        console.log(val);
        let time = val;
        if(this.timer){
          clearInterval(this.timer)
        }
        this.timer = setInterval(() =>{
          time--;
          if(time===0){
            clearInterval(this.timer)
            this.codeButtonStatus.text ='再次获取';
            this.codeButtonStatus.status =false;
          }else{
            this.codeButtonStatus.text =`倒计时${time}秒`;
          }
        },1000)
      },
      //登录或注册
      submitForm(formName) {   
        this.$refs[formName].validate((valid) => {
          if (valid) {
            
            this.model ==='login'?this.login():this.register()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //去登陆
      login(){
        let params={
          username:this.ruleForm.username,
          password:sha1(this.ruleForm.password),
          code:this.ruleForm.code,
        }

      },
      //去注册
      register(){
        let params={
          username:this.ruleForm.username,
          password:sha1(this.ruleForm.password),
          code:this.ruleForm.code,
          module:'register'
        }
        Register(params).then(res =>{
          Message.success(res.data.message);
          console.log(res);
          this.toggleMenu(this.menuTab[0]);
          //清楚定时器
          this.clearCountDown();

        }).catch(err =>{
          console.log(err);
        })

      },
       //清除倒计时
      clearCountDown(){
        this.codeButtonStatus.status=false;
        this.codeButtonStatus.text="获取验证码";
        clearInterval(this.timer);
      }
    },

}
</script>
<style lang="scss" scoped>
#login{
    width:100%;
    height:100vh;
    background-color:#244a5f;
}
.login-wrap{  
  width:330px;
  margin:auto;
}
.menu-tab{
  text-align: center;
  li{
    display: inline-block;
    width:88px;
    line-height: 36px;
    font-size: 14px;
    color:#fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .current{
    background-color:rgba(0,0,0,.1)
  }
}
.login-from{
  margin-top:29px;
  label{
    display: block;
    font-size: 14px;
    color:#fff;
    margin-bottom: 3px;
  }
  .item-form{
    margin-bottom: 13px;
  }
  .block{
    width:100%;
    display: block;
  }
  .login-btn{
    margin-top:19px;
  }
}
</style>