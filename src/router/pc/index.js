import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/pc/home'

Vue.use(Router)

let router = new Router({
        routes: [{
            path: '/',
            name: 'Home',
            component: Home,
            meta: { title: '首页' }
        }, ]
    })
    /**
     * 判断是否为移动设备，是，则跳转到移动端的路径
     */
router.beforeEach((to, from, next) => {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        window.location.href = '/m.html#/'
        return
    }
    next()
})
export default router