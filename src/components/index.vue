<template>
  <div class="index">
    <!-- <img src="../assets/logo.png"> -->
    <!-- <h4>主入口模块</h4>
    <el-button type="primary" @click="_go(1)">用户登录</el-button>
    <el-button type="primary" @click="_go(2)">商家登录</el-button>
    <el-button type="primary" @click="_go(3)">业务员登录</el-button>
    <el-button type="primary" @click="_register">注册</el-button> -->
      <h1 style="z-index: 10;">淘梦者</h1>
      <div class="login">
        <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card" >
          <el-tab-pane label="登录" name="first">
              <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="50px" style="margin-top: 15px;">
                <el-form-item label="类型" >
                  <el-select v-model="ruleForm2.type" placeholder="客官" style="width:100%;">
                    <el-option label="客官" value="1"></el-option>
                    <el-option label="管理者" value="2"></el-option>
                    <el-option label="商铺" value="3"></el-option>
                  </el-select>
                </el-form-item> 
                <el-form-item label="账号" prop="account">
                 <el-input type="text" v-model="ruleForm2.account"  placeholder="请输入账号" icon="information"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="ruleForm2.pass"  placeholder="请输入密码" icon="message"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="login('ruleForm2')" style="width: 100%;">登录</el-button>
                  <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
                </el-form-item>
              </el-form>
          </el-tab-pane>
          <el-tab-pane label="加入我们" name="second">
              <el-form :model="ruleForm3" :rules="rules3" ref="ruleForm3" label-width="80px" style="margin-top: 15px;">
                <el-form-item label="类型" >
                  <el-select v-model="ruleForm3.type" placeholder="客官" style="width:100%;" >
                    <el-option label="客官" value="1"></el-option>
                    <el-option label="管理者" value="2"></el-option>
                    <el-option label="商铺" value="3"></el-option>
                  </el-select>
                </el-form-item> 
                <el-form-item label="验证码" prop="verificationCode">
                 <el-input type="text" v-model="ruleForm3.verificationCode"  placeholder="请输入验证码" style="width:55%;"></el-input>
                 <el-button type="primary">获取验证码</el-button>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="ruleForm3.pass"  placeholder="请输入密码" icon="message"></el-input>
                </el-form-item>
                <el-form-item label="邀请码" prop="invitation">
                  <el-input type="invitation" v-model="ruleForm3.invitation"  placeholder="请输入邀请码" icon="information"></el-input>
                </el-form-item>
              
                <el-form-item>
                  <el-button type="primary" @click="join('ruleForm3')" style="width: 100%;">加入我们</el-button>
                  <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
                </el-form-item>
              </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>

<script>
import host from '../common.js'

export default {
  name: 'index',
  mounted(){
    
  },
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      activeName: 'first',
      ruleForm2: {
          pass: '',
          account: '',
          type:'1'
        }, 
      ruleForm3: {
        pass: '',
        verificationCode: '',
        type:'1',
        invitation:''
      },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          account: [
            { validator: validatePass, trigger: 'blur' }
          ]   
        },
        rules3: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          account: [
            { validator: validatePass, trigger: 'blur' }
          ]   
        }
      }
    },
 
  methods:{
    _go(ind){
      switch (ind) {
        case 1:
          this.$router.push('/user')
          break;
        case 2:
          this.$router.push('/bussiness')
          break;
        case 3:
          this.$router.push('/clerk')
          break;
      }
    },
    _register(){
      this.$router.push('/register')
    },
    handleClick(tab, event) {
        // console.log(tab, event);
    },
    login(formName) {
      console.log(this.ruleForm2);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      join(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .index{
    width: 100%;
    height: 100%;
    background:#ccc;
    z-index: 0;
    position: absolute;
    left: 0;
    top: 0;
  }
  .login{
    width: 350px;
    position: absolute;
    right: 10%;
    top: 100px;
    border-radius: 20px;
    .el-tabs{
     
    }
  }
  
</style>
