import ListNote from './components/ListNote.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import UpdateNote from './components/UpdateNote.vue'



export default [
    {path: '/', component: ListNote, meta: {requiresAuth: true}},
    {path: '/list-note', component: ListNote, meta: {requiresAuth: true}},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/update-note/:id', component: UpdateNote, meta: {requiresAuth: true}}
]