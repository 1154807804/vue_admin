import Vue from 'vue'
import Router from 'vue-router'
// import App from '../App'
// import Login from '../page/login'
// import Header from '../page/header'
// import One from '../page/one'
// import Pwd from '../page/pwd'

import User from '@/components/user'
import Login from '@/components/login'
import Home from '@/components/home'
import Pwd from '@/components/pwd'
import Adminlist from '@/components/adminlist'
import Add from '@/components/add'
import Edit from '@/components/edit'
import Addstudent from '@/components/addstudent'

// import myVideo from "vue-video"
// Vue.use(myVideo)
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    //   children:[
    //     {
    //       path:"/",
    //       component:r=>require.ensure([],r=>require("../page/login"),"login")
    //     },
    //     // {
    //     //   path:"/header",
    //     //   component:r=>require.ensure([],r=>require('../page/header'),"header")
    //     // },
    //     {
    //       path:"/one",
    //       component:r=>require.ensure([],r=>require('../page/one'),"one")
    //     },
    //     {
    //       path:"/pwd",
    //       component:r=>require.ensure([],r=>require('../page/pwd'),"pwd")
    //     },
    //     {
    //       path:"/admin",
    //       component:r=>require.ensure([],r=>require('../page/admin'),"admin")
    //     },
    //     {
    //       path:"/user",
    //       component:r=>require.ensure([],r=>require('../page/user'),"user")
    //     },
    //   ]
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:"/pwd",
      name: 'pwd',
      component:Pwd
    },
    {
      path:"/adminlist",
      name: 'adminlist',
      component:Adminlist
    },
    {
      path:"/add",
      name: 'add',
      component:Add
    },
    {
      path:"/edit",
      name: 'edit',
      component:Edit
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/addstudent',
      name: 'addstudent',
      component: Addstudent
    },
  ]
})
