import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import OrderConfirm from '@/components/OrderConfirm'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/confirm',
            name: 'OrderConfirm',
            component: OrderConfirm
        }
    ]
})