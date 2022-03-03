import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/views/Home.vue'
import Login from '@/components/views/Login.vue'
import Site from '@/components/views/Site.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Leads from '@/components/vendas/Leads.vue'
import Contratos from '@/components/vendas/Contratos.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'

const routes = [
    {
        path: '/',
        component: Site
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: 'vendas', component: Vendas, children:
                    [
                        { path: 'leads', component: Leads },
                        { path: 'contratos', component: Contratos },
                    ],
            },
            { path: 'servicos', component: Servicos },
            { path: 'dashboard', component: Dashboard },
        ]
    },
    {
        path: '/login',
        component: Login
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})