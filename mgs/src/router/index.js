import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/menu'
import login from '@/components/login/login'
import register from '@/components/login/register'
import findPwd from '@/components/login/findPwd'
import map from '@/components/index/map'
import release from '@/components/release/release'
import nearby from '@/components/release/nearby'
import national from '@/components/release/national'
import customize from '@/components/release/customize'
import order from '@/components/order/order'
import details from '@/components/order/details'


import mg from '@/components/mg/index'

import user from '@/components/user/user'
import enterprise from '@/components/user/enterprise'
import certi from '@/components/user/certi'
import certiImg from '@/components/user/certiImg'
import sc from '@/components/user/succCerti'            

import wallet from '@/components/wallet/wallet'
import bankCard from '@/components/wallet/bankCard'
import addCard from '@/components/wallet/addCard'
import setPwd from '@/components/wallet/setPwd'
import balance from '@/components/wallet/balance'
import baDetail from '@/components/wallet/baDetail'

import set from '@/components/setting/set' 
import account from '@/components/setting/account'
import certiCpd from '@/components/setting/certiCpd'

Vue.use(Router)

export default new Router({
  routes: [
		{
			path:"/login",
			name:"login",
			component:login
		},{
			path:"/register",
			name:"register",
			component:register 
		},
		{
			path:"/findPwd",
			name:"findPwd",
			component:findPwd
		},
    {
      path: '/',
      name: 'Menu',
      component: Menu,
			children:[
				{
					path:'/map',
					name:'map',
					component:map
				}
			],
			redirect:'/map'
    },
		{
			path:"/release",
			name:"release",
			component:release,
			children:[
				{
					path:'/nearby',
					name:'nearby',
					component:nearby
				},
				{
					path:'/national',
					name:'national',
					component:national
				},{
					path:'/customize',
					name:'customize',
					component:customize
				},
			],redirect:'/national'
		},
		{
			path:"/user",
			name:"user",
			component:user,
		},{
					path:'/user/certi',
					name:'certi',
					component:certi
				},{
				path:'/user/enterprise',
				name:'enterprise',
				component:enterprise
			},{
				path:'/user/certi/img',
				name:'certiImg',
				component:certiImg
			},{
				path:'/user/certi/sc',
				name:'sc',
				component:sc
			},{
				path:'/order',
				name:'order',
				component:order
			},{
				path:'/details',
				name:'details',
				component:details
			},{
				path:'/mg',
				name:'mg',
				component:mg
			},{
				path:'/wallet',
				name:'wallet',
				component:wallet
			},{
				path:'/wallet/bankCard',
				name:'bankCard',
				component:bankCard
			},{
				path:'/wallet/addCard',
				name:'addCard',
				component:addCard
			},{
				path:'/wallet/setPwd',
				name:'setPwd',
				component:setPwd
			},{
				path:'/wallet/balance',
				name:'balance',
				component:balance
			},{
				path:'/wallet/balance/baDetail',
				name:'baDetail',
				component:baDetail
			},{
				path:'/set',
				name:'set',
				component:set
			},{
				path:'/set/account',
				name:'account',
				component:account
			},{
				path:'/set/account/certiCpd',
				name:'certiCpd',
				component:certiCpd
			}
			         
  ]
})
