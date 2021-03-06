import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
//import ListPage from '@/views/ListPage.vue'
import ContentPage from '@/views/ContentPage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/score/:slug',
        name: 'ContentPage',
        component: ContentPage
    },
    //{
    //    path: '/list/:slug',
    //    name: 'ListPage',
    //    component: ListPage
    //},
]

const router = new VueRouter({
    routes,
    //do NOT user mode: "history" or "abstract", we need hastags
    //mode: "history",
    mode: "hash",
})

export default router
