<template>
  <div id="login">
   <div class="login-wrap">
     <ul class="menu-tab">
       <li v-for="(item,index) in menuTab" :key="index" :class="item.current?'current':''" @click="toggleMenu(item)">{{item.txt}}</li>
     </ul>
     <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-from" size="medium">
        <el-form-item prop="username" class="item-form">
          <label for="">邮箱</label>
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="password" class="item-form">
          <label for="">密码</label>
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
         <el-form-item prop="passwords" class="item-form" v-if="model=='注册'">
          <label for="">重复密码</label>
          <el-input type="password" v-model="ruleForm.passwords" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item  prop="code" class="item-form">
          <label for="">验证码</label>
          <el-row :gutter="20">
            <el-col :span="15"><el-input v-model.number="ruleForm.code"></el-input></el-col>
            <el-col :span="9"><el-button type="success" class="block">验证码</el-button></el-col>          
          </el-row>        
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block">提交</el-button>
        </el-form-item>
      </el-form>
   </div>
  </div>
</template>

<script>
import { stripscript, validatePass, validateEmail, validateVCode } from '@/utils/validate';
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
          {txt:'登录',current:true},
          {txt:'注册',current:false}
        ],
        model:'登录'
      }
    },
    methods:{
      //登录注册切换
      toggleMenu(data){
        this.menuTab.forEach(el =>{
          el.current =false;
        })
        data.current =true;
        this.model = data.txt;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
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