import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 解决报错
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {

return originalPush.call(this, location).catch(err => err)

}
const routes = [
  {
    path: "/login",
    name: "login",
    component: resolve => require(["@/views/login.vue"],resolve),
  },
  {
  path: "/register",
  name: "register",
  component: resolve => require(["@/views/register.vue"],resolve),
  },
  {
    path: "/forgetPassword",
    name: "forgetPassword",
    component: resolve => require(["@/views/forgetPassword.vue"],resolve),
    },
  {
    path:'/',
    redirect:'/honme'
  },
  {
    path: "/",
      name: "home",
      component: resolve => require(["@/views/index.vue"],resolve),
      children:[
        {
        path: "/home",
        name: "home",
        component: resolve => require(["@/views/home.vue"],resolve),
        },
        {
        path: "/SubmitVulnerability",
        name: "SubmitVulnerability",
        component: resolve => require(["@/views/SubmitVulnerability.vue"],resolve),
        },
        {
          path: "/notice",
        name: "notice",
        component: resolve => require(["@/views/notice.vue"],resolve),
        },
        {
          path: "/softwareUpdate",
        name: "softwareUpdate",
        component: resolve => require(["@/views/softwareUpdate.vue"],resolve),
        },
        {
          path: "/notice",
        name: "notice",
        component: resolve => require(["@/views/notice.vue"],resolve),
        },
        {
          path: "/herolist",
        name: "herolist",
        component: resolve => require(["@/views/herolist.vue"],resolve),
        },
        {
          path: "/policy",
        name: "policy",
        component: resolve => require(["@/views/policy.vue"],resolve),
        },
        {
          path: "/personCenter",
        name: "personCenter",
        component: resolve => require(["@/views/personCenter.vue"],resolve),
        },
        {
          path: "/roleReport",
        name: "roleReport",
        component: resolve => require(["@/views/roleReport.vue"],resolve),
        },
     
      ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path == "/login" || to.path == "/register" || to.path == "/forgetPassword") return next();
  const username = window.sessionStorage.getItem("username");
  if (!username) return next("/login");
  next();
});

export default router;