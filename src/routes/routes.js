import { createRouter, createWebHistory } from 'vue-router'

import Contratos from '@/components/vendas/Contratos.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import DashboardFooter from '@/components/dashboard/DashboardFooter.vue'
import Home from '@/components/views/Home.vue'
import Indicadores from '@/components/servicos/Indicadores.vue'
import Lead from '@/components/vendas/Lead.vue'
import Leads from '@/components/vendas/Leads.vue'
import Login from '@/components/views/Login.vue'
import Opcoes from '@/components/servicos/Opcoes.vue'
import PageNotFound from '@/components/views/PageNotFound.vue'
import Servico from '@/components/servicos/Servico.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Site from '@/components/views/Site.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import VendasPadrao from '@/components/vendas/VendasPadrao.vue'

const routes = [
    {
        path: '/',
        component: Site,
        meta: { requerAutorizacao: false }
    },
    {
        path: '/home',
        component: Home,
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
    // scrollBehavior() {
    //     return { left: 0, top: 150 }
    // },
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

