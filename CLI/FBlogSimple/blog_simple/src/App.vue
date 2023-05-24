<template>
  <div>
    <div class="container">
      <!-- <add-blog></add-blog> -->
      <!-- <show-blogs></show-blogs>
      <list-blogs></list-blogs> -->
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
