<template>
  <div>
    <div class="container">
      <!-- <add-blog></add-blog> -->
      <!-- <show-blogs></show-blogs>
      <list-blogs></list-blogs> -->
      <ul>
        <li><router-link to="/add-blog" exact>add-blog</router-link></li>
        <li><router-link to="/list-blogs" exact>list-blogs</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog.vue'
import ListBlogs from './components/ListBlogs.vue';
import ShowBlogs from './components/ShowBlogs.vue';
export default {
  components: { 
    AddBlog, 
    'show-blogs': ShowBlogs,
    ListBlogs 
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
</style>
