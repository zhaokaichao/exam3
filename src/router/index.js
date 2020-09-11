import Vue from 'vue'
import VueRouter from 'vue-router'
import Find from '../views/Find.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Find',
        component: Find
    },
    {
        path: '/like',
        name: 'Like',
        component: () =>
            import ( /* webpackChunkName: "like" */ '../views/Like.vue')
    }, {
        path: '/city',
        name: 'City',
        component: () =>
            import ( /* webpackChunkName: "city" */ '../views/City.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router