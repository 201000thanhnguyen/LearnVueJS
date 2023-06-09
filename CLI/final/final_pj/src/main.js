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
    myVariable: 'Hello World',
    // sẽ sử dụng vuex để check thông tin user login
    serverLoginPass: false,
    accUserInfo: {}
  },
  mutations: {
    updateServerLoginPass(state, newValue) {
      state.serverLoginPass = newValue
    },
    setInfoAcc(state, newValue) {
      state.accUserInfo = newValue;
    }
  }
})

const router = new VueRouter({
  routes: Routes
});

router.beforeEach((to, from, next) => {

  let urlC = window.location.href;
  urlC = urlC.substring("http://localhost:8080/#".length);

  if (typeof store.state.serverLoginPass == "undefined" || store.state.serverLoginPass == null) {
    // call api và thay đổi lại serverLoginPass
    // hiện tại đang set cứng serverLoginPass = true để login
    store.state.serverLoginPass = false;

    if (store.state.serverLoginPass == true) {
      next({ path: '/' });
    } else {
      next({ path: '/login' });
    }
  } else if (store.state.serverLoginPass == false) {
    if (to.matched.some(record => record.meta.requiresAuth) == true && store.state.serverLoginPass == false) {
      if ("/login" == urlC) {

      } else {
        next({ path: '/login' });
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router: router
})
