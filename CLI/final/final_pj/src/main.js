import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import Vuex from 'vuex'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    myVariable: 'Hello World'
    // sẽ sử dụng vuex để check thông tin user login
  }
})

const router = new VueRouter({
  routes: Routes
});
var serverLoginPass;

router.beforeEach((to, from, next) => {
  let urlC = window.location.href;

  urlC = urlC.substring("http://localhost:8080/#".length);

  if (typeof serverLoginPass == "undefined" || serverLoginPass == null) {
    // call api và thay đổi lại serverLoginPass
    // hiện tại đang set cứng serverLoginPass = true để login
    serverLoginPass = true;

    if (serverLoginPass == true) {
      next({ path: '/' });
    } else {
      next({ path: '/login' });
    }
  } else if(serverLoginPass == false) {
    if (to.matched.some(record => record.meta.requiresAuth) == true && serverLoginPass == false) {
      if ("/login" == urlC || "/" == urlC) {

      } else {
        next({ path: '/login' });
      }
    }else {
      next();
    }
  }else {
    next();
  }

  // if (localStorage.getItem('isNotAuthenticated') == null || localStorage.getItem('isNotAuthenticated') == "true") {
  //   localStorage.setItem('isNotAuthenticated', true);
  // } else {
  //   localStorage.setItem('isNotAuthenticated', false);
  // }
  // const isNotAuthenticated = localStorage.getItem('isNotAuthenticated'); // Kiểm tra xem người dùng đã đăng nhập hay chưa
  // if (isNotAuthenticated == null) {
  //   next({ path: '/login' });
  // } else {
  //   if (to.matched.some(record => record.meta.requiresAuth) == true && isNotAuthenticated == "true") {
  //     // Nếu chưa đăng nhập, chuyển hướng về trang đăng nhập
  //     console.log("beforeEach login");
  //     if ("/login" == urlC || "/" == urlC) {

  //     } else {
  //       next({ path: '/login' });
  //     }
  //   } else {
  //     console.log("beforeEach next");
  //     next();
  //   }
  // }

});

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router: router
})
