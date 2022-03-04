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
        component: Site
    },
    {
        path: '/home',
        component: Home,
        name: 'Home',
        children: [
            {
                path: 'vendas', component: Vendas, children:
                    [
                        { path: 'leads', component: Leads, name: 'Leads' },
                        { path: 'leads/:id', component: Lead, name: 'Lead' },
                        { path: 'contratos', component: Contratos, name: 'Contratos' },
                        { path: '', component: VendasPadrao, name: 'Vendas', },
                    ],
            },
            { path: 'servicos', component: Servicos, name: 'Servicos', children: 
                [
                    { path:':id', name: 'Servico', components:  
                        {
                            default: Servico,
                            opcoes: Opcoes,
                            indicadores: Indicadores,
                        } 
                    },
                ], 
            },
            { path: 'dashboard', components: {
                default: Dashboard,
                rodape: DashboardFooter
            }, name: 'Dashboard'},
        ]
    },
    {
        path: '/login',
        component: Login,
        name: 'Login'
    },
    { path: '/redirecionamento-1', redirect: { name: 'Servicos' } },
    { path: '/redirecionamento-2', redirect: { name: 'Leads' } },
    { path: '/redirecionamento-3', redirect: { name: 'Vendas' } },
    { path: '/redirecionamento-4', redirect: to => {
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
    routes
})