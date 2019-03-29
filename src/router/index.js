import Vue from 'vue'
import Router from 'vue-router'
import login from '..//forms/auth'
import dashboard from '..//components/HelloWorld'
import firebase from "firebase"

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
      {
        path: "*",
        redirect: "/login"
      },
      {
        path: "/",
        redirect: "/login"
      },
      {
        path: "/login",
        name: "login",
        component: login
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard,
        meta: {
          requiresAuth: true
        }
      }
  ]
});

router.beforeEach((to, from, next) => {
  
  const currentUser = firebase.auth().currentUser;
  console.log("currentUser", currentUser);
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser)
  {
     next("login")
  }
  else if (!requiresAuth && currentUser) next("dashboard");
  else next();
});

export default router;