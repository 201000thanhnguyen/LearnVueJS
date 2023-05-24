import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import ListBlogs from './components/ListBlogs.vue'


export default [
    {path: '/', component: ShowBlogs},
    {path: '/add-blog', component: AddBlog},
    {path: '/list-blogs', component: ListBlogs}
]