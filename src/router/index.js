import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    hidden:true,
    meta: {
      name: "重定向",
      icon: 'console'
    },  
    redirect: '/Login',
  },
  {
    path: "/Login",
    name: "Login",
    hidden:true,
    meta: {
      name: "登录页",
      icon: 'console'
    },  
    component: () =>import("../views/Login/index.vue")
  },
  {
    path: "/console",
    name: "Console",
    meta: {
      name: "控制台",
      icon: 'el-icon-setting'
    },
    redirect: "index",
    component: () =>import("../views/Layout/index.vue"),
    children:[
      {
        path: "/index",
        name: "Console",
        meta: {
          name: "首页",
          icon: 'el-icon-s-help'
        },
        component: () =>import("../views/Console/index.vue")
      },
    ]
  },
  {
    path: "/info",
    name: "Info",
    meta: {
      name: "信息管理",
      icon: 'el-icon-s-comment'
    },
    component: () =>import("../views/Layout/index.vue"),
    children:[
      {
        path: "/infoIndex",
        name: "infoIndex",
        meta: {
          name: "信息列表",
          icon: 'el-icon-s-comment'
        },
        component: () =>import("../views/Info/index.vue")
      },
      {
        path: "/infoCategory",
        name: "infoCategory",
        meta: {
          name: "信息分类",
          icon: 'el-icon-s-flag'
        },
        component: () =>import("../views/Info/category.vue")
      },
    ]
  },
  // 用户管理
  {
    path: "/user",
    name: "User",
    meta: {
      name: "用户管理",
      icon: 'el-icon-user-solid'
    },
    component: () =>import("../views/Layout/index.vue"),
    children:[
      {
        path: "/userIndex",
        name: "userIndex",
        meta: {
          name: "用户列表",
          icon: 'el-icon-user'
        },
        component: () =>import("../views/User/index.vue")
      },
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
