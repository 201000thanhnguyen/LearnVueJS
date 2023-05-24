import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
// import Routes from './routes'

import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import ListBlogs from './components/ListBlogs.vue'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/', component: ShowBlogs},
    {path: '/add-blog', component: AddBlog},
    {path: '/list-blogs', component: ListBlogs}
]
});


Vue.filter('toUpperCase1', function (value) {
  return value.toUpperCase();
});

Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString().slice(2, 8);
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
 