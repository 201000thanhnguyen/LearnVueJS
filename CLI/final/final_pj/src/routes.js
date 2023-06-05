import ListNote from './components/ListNote.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'



export default [
    {path: '/', component: ListNote},
    {path: '/list-note', component: ListNote},
    {path: '/login', component: Login},
    {path: '/register', component: Register}
]