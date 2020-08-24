import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    meta: {
      name: "重定向",
      icon: 'console'
    },  
    redirect: '/Login',
  },
  {
    path: "/Login",
    name: "Login",
    meta: {
      name: "登录页",
      icon: 'console'
    },  
    component: () =>import("../views/Login/index.vue")
  },
  {
    path: "/Layout",
    name: "Layout",
    meta: {
      name: "控制台",
      icon: 'console'
    },
    redirect: "index",
    component: () =>import("../views/Layout/"),
    children:[
      {
        path: "/index",
        name: "index",
        meta: {
          name: "首页",
          icon: 'console'
        },
        component: () =>import("../views/Layout/index.vue")
      },
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
