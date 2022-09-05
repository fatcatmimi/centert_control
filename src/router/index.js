import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

// import SzComponent from '@/pages/Sz'
// import NotFoundComponent from '@/pages/404'

const SzComponent = () => import('../pages/Sz')
const DataVComponent = () => import('../pages/dataV')
const NotFoundComponent = () => import('../pages/404')

const routes = [
    {
        path: '/znz/:sz/:sdate/:actId',
        name: 'Sz',
        component: SzComponent,
        props: route => ({
            stype: route.params.sz,
            sdate: route.params.sdate,
            actId: route.params.actId
        })
    },
    {
        path: '/dataV/:sz/:sdate/:actId',
        name: 'DataV',
        component: DataVComponent,
        props: route => ({
            stype: route.params.sz,
            sdate: route.params.sdate,
            actId: route.params.actId
        })
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFoundComponent
    }
]
export default new VueRouter({
    routes
})