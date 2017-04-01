
<template lang="html">
<div id="bIndex">
  <el-row>
    <el-col class="nav-common">
      <el-col :xs="24" :sm="{span:6,offset:0}" :md="{span:4,offset:0}" :lg="{span:2,offset:0}" class="common-min">
            <span></span>
        </el-col>



        <el-col :xs="24" :sm="{span:6,offset:0}" :md="{span:6,offset:0}" :lg="{span:4,offset:0}" class="nav-right">
          <el-col :xs="0" :sm="{span:8,offset:0}" :md="{span:10,offset:0}" :lg="{span:10,offset:0} ">
              <p>当前商家在线</p>
          </el-col>
            <el-col :xs="6" :sm="{span:8,offset:8}" :md="{span:1,offset:13}" :lg="{span:1,offset:13}">
              <div class="header-img">

              </div>
            </el-col>
        </el-col>
    </el-col>



    <el-col :xs="24" :sm="{span:6,offset:0}" :md="{span:4,offset:0}" :lg="{span:2,offset:0}" class="common-s">
      <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-menu-item-group title="淘梦地带">
            <el-menu-item index="1" @click="one">我的淘梦</el-menu-item>

          </el-menu-item-group>
          <el-menu-item-group title="账单记录">
            <el-menu-item index="2" @click="one">消费记录</el-menu-item>
            <el-menu-item index="3" @click="one">提现记录</el-menu-item>
            <el-menu-item index="4" @click="one">兑换记录</el-menu-item>
            <el-menu-item index="5" @click="one">淘豆流水</el-menu-item>
            <el-menu-item index="6" @click="one">额度流水</el-menu-item>

          </el-menu-item-group>

        </el-menu>
    </el-col>
    <el-col :xs="24" :sm="{span:16,offset:0}" :md="{span:19,offset:0} " :lg="{span:21,offset:0}" class="common-main">
      <router-view></router-view>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'bIndex',
  data() {
    return {
      input2: '',
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value6: '',
      value7: ''
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleIconClick(ev) {
      console.log(ev);
    },
    one(ev) {
      if (ev.index == 1) {
        this.$router.push("/bussiness/dream")
      } else if (ev.index == 2) {
        this.$router.push("/bussiness/expenseRecord")
      } else if (ev.index == 3) {
        this.$router.push("/bussiness/withdrawalsRecord")
      } else if (ev.index == 4) {
        this.$router.push("/bussiness/conversionRecord")
      } else if (ev.index == 5) {
        this.$router.push("/bussiness/TDRecord")
      } else if (ev.index == 6) {
        this.$router.push("/bussiness/limitRecord")
      }

    }

  }
}
</script>

<style lang="css">

.uc{

  background-color: #FFF;
}
.common-s{

  height: 840px;
  background: #FFF;
border-right: 1px solid rgb(193, 193, 193);
box-shadow: 0px 5px 10px rgb(93, 93, 93);
}
.common-nav{
  height: 60px;
}
.common-main{
  background: #eee;
  height: 820px;
  margin-left: 2%;
  margin-top: 16px;

}
.common-s{
  margin-top: 10px;
}
.nav-right{
height: 60px;
  /*border-left: 1px solid rgb(193, 193, 193);*/
}
.el-menu{
  background-color: #fff;
}

.common-min{
  height: 60px;
/*border-bottom: 1px solid rgb(193, 193, 193);*/
/*border-left: 1px solid rgb(193, 193, 193);*/
}
.nav-common{
  /*margin-top: -5px;*/
  box-shadow: 0px 5px 10px rgb(93, 93, 93);

  background-color: #FFF;
}
.header-img{

    width: 35px;
    height: 35px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    border: 2px dashed #fff;
    margin: 10px;
    margin-left: 50px;
    text-decoration: none;
    -moz-box-shadow: 0 0 0 3px #65b37a, 2px 1px 4px 4px rgba(10,10,0,.5);
    -webkit-box-shadow: 0 0 0 3px #65b37a, 2px 1px 4px 4px rgba(10,10,0,.5);
    box-shadow: 0 0 0 3px #65b37a, 2px 1px 6px 4px rgba(10,10,0,.5);
    background: -webkit-radial-gradient(#e8b15e 4px, transparent 6px);
    background: -moz-radial-gradient(#e8b15e 4px, transparent 6px);
    background-size: 20px 20px;
    background-image: -webkit-radial-gradient(#e8b15e 15%, transparent 16%), -webkit-radial-gradient(#e8b15e 15%, transparent 16%);
    background-image: -moz-radial-gradient(#e8b15e 15%, transparent 16%), -moz-radial-gradient(#e8b15e 15%, transparent 16%);
    background-color: #65b37a;
    background-size: 30px 30px;
    background-position: 0 0, 20px 20px;
}
</style>
