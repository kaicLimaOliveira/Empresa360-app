import { createRouter, createWebHistory } from 'vue-router'

const Contratos = () => import(/* webpackChunkName: "vendas" */ '@/components/vendas/Contratos.vue')
const Dashboard = () => import('@/components/dashboard/Dashboard.vue')
const DashboardFooter = () => import('@/components/dashboard/DashboardFooter.vue')
import Indicadores from '@/components/servicos/Indicadores.vue'
const Lead = () => import(/* webpackChunkName: "vendas" */ '@/components/vendas/Lead.vue')
const Leads = () => import(/* webpackChunkName: "vendas" */ '@/components/vendas/Leads.vue')
import Login from '@/components/views/Login.vue'
import Opcoes from '@/components/servicos/Opcoes.vue'
import PageNotFound from '@/components/views/PageNotFound.vue'
import Servico from '@/components/servicos/Servico.vue'
import Servicos from '@/components/servicos/Servicos.vue'
const Vendas = () => import(/* webpackChunkName: "vendas" */ '@/components/vendas/Vendas.vue')
const VendasPadrao = () => import(/* webpackChunkName: "vendas" */ '@/components/vendas/VendasPadrao.vue')

const routes = [
    {
        path: '/',
        component: () => import('@/components/views/Site.vue'),
        meta: { requerAutorizacao: false }
    },
    {
        path: '/home',
        component: () => import('@/components/views/Home.vue'),
        name: 'Home',
        meta: { requerAutorizacao: true },
        alias: '/app',
        children: [
            {
                path: 'vendas', component: Vendas, children:
                    [
                        {
                            path: 'leads',
                            component: Leads,
                            name: 'Leads',
                            beforeEnter() {
                                console.log('Guarda de rota beforeEnter');
                            }
                        },
                        {
                            path: 'leads/:id/:outroParametro',
                            props: true,
                            component: Lead,
                            name: 'Lead',
                            alias: [
                                '/l/:id/:outroParametro',
                                '/pessoa/:id/:outroParametro',
                                '/:id/:outroParametro'
                            ]
                        },
                        { path: 'contratos', component: Contratos, name: 'Contratos' },
                        { path: '', component: VendasPadrao, name: 'Vendas', },
                    ],
            },
            {
                path: 'servicos', component: Servicos, name: 'Servicos', children:
                    [
                        {
                            path: ':id',
                            props: {
                                default: true,
                                indicadores: true,
                                opcoes: true
                            },
                            alias: '/s/:id',
                            name: 'Servico',
                            components:
                            {
                                default: Servico,
                                indicadores: Indicadores,
                                opcoes: Opcoes,
                            }
                        },
                    ],
            },
            {
                path: 'dashboard', components: {
                    default: Dashboard,
                    rodape: DashboardFooter
                }, name: 'Dashboard'
            },
        ]
    },
    {
        path: '/login',
        component: Login,
        meta: { requerAutorizacao: false },
        name: 'Login'
    },
    { path: '/redirecionamento-1', redirect: { name: 'Servicos' } },
    { path: '/redirecionamento-2', redirect: { name: 'Leads' } },
    { path: '/redirecionamento-3', redirect: { name: 'Vendas' } },
    {
        path: '/redirecionamento-4', redirect: to => {
            console.log(to);

            return { name: 'Vendas' }
        }
    },
    // route catch all
    // { path: '/:catchAll(.*)*', redirect: '/'}
    { path: '/:catchAll(.*)*', component: PageNotFound }
]

export const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        console.log(savedPosition);

        if(savedPosition) return savedPosition
        if(to.hash) return{ el: to.hash }
        
        return { left: 0, top: 0 }
    },
    routes
})

// router.beforeResolve(() => {
//     console.log('Guarda global beforeResolve');
// })

// router.beforeEach(() => {
//     console.log('Guarda global beforeEach');
// })

// router.afterEach(() => {
//     console.log('Guarda global afterEach');
// })

