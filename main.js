const router = new VueRouter({
    routes: [
        { path: '/', component: httpVueLoader('./page1.vue') },
        { path: '/page2', component: httpVueLoader('./page2.vue') },
    ]
})

const app = new Vue({
    el: "#app",
    router
});