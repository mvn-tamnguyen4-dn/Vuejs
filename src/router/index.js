import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Profile from '../components/Profile.vue'
import ListUser from '../components/ListUser.vue'

export default new VueRouter({
    mode: 'history',
    base: '/',
    routes: [{
        path: '/home',
        name: 'home',
        component: Home,
        children: [{
                path: 'profile/:id',
                name: 'userProfile',
                component: Profile
            },
            {
                path: 'users',
                name: 'userList',
                component: ListUser
            }
        ]
    }]
})