import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import ListBlogs from './components/ListBlogs.vue'
import SingleBlog from './components/SingleBlog.vue'



export default [
    {path: '/', component: ShowBlogs},
    {path: '/add-blog', component: AddBlog},
    {path: '/list-blogs', component: ListBlogs},
    {path: '/single-blog/:id', component: SingleBlog}
]