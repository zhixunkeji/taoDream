import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import register from '@/components/register'
import userIndex from '@/components/User/userIndex'
import userinfo from '@/components/User/userinfo'
import userList from '@/components/User/userList'
import bIndex from '@/components/Business/index'
import cIndex from '@/components/Clerk/index'

// 商家模块
import bIndexDream from '@/components/Business/modules/dream'//淘梦地带
import bIndexExpenseRecord from '@/components/Business/modules/expenseRecord'//消费记录
import bIndexWithdrawalsRecord from '@/components/Business/modules/withdrawalsRecord'//提现记录
import bIndexConversionRecord from '@/components/Business/modules/conversionRecord'//兑换记录
import bIndexTDRecord from '@/components/Business/modules/TDRecord'//淘豆流水
import bIndexLimitRecord from '@/components/Business/modules/limitRecord'//额度流水


Vue.use(Router)

export default new Router({
  routes: [
    // 主入口
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    // 用户部分
    {
      path: '/user',
      name: 'userIndex',
      component: userIndex,
      children:[
        {
          path: '/',
          component: userinfo
        },
        {
          path: '/userList',
          component: userList
        }
      ]
    },
    //商家部分
    {
      path: '/bussiness',
      name: 'bIndex',
      component: bIndex,
      children:[{
                    path:'',
                    redirect:'dream'
                  },{
                    path:'dream',
                    component:bIndexDream //淘梦地带
                  },{
                    path:'expenseRecord', //消费记录
                    component:bIndexExpenseRecord
                  },{
                    path:'withdrawalsRecord', //提现记录
                    component:bIndexWithdrawalsRecord
                  },{
                    path:'conversionRecord', //兑换记录
                    component:bIndexConversionRecord
                  },{
                    path:'TDRecord', //淘豆流水
                    component:bIndexTDRecord
                  },{
                    path:'limitRecord', //额度流水
                    component:bIndexLimitRecord
                  }]

    },
    // 业务员部分
    {
      path: '/clerk',
      name: 'cIndex',
      component: cIndex
    }
  ]
})
