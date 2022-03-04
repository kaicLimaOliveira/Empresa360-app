<template>
  <div>
    <nav class="navbar navbar-light bg-light menu-superior">
      <div class="container">
        <RouterLink class="navbar-brand" :to="{ name: 'Home' }">Empresa 360</RouterLink>
        <div class="navbar-nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" :to="{ name: 'Login' }">Sair</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="d-flex">
      <div class="list-group menu-esquerda">
        <RouterLink 
          class="list-group-item list-group-item-action" 
          :to="{ name: 'Dashboard' }" 
          active-class="ativo" 
          exact-active-class="active"
        >
          <i class="bi bi-speedometer2"></i> Dashboard
        </RouterLink>

        <RouterLink
          class="list-group-item list-group-item-action"
          :to="{ name: 'Vendas' }"
          active-class="ativo"
          exact-active-class="active"
        >
          <i class="bi bi-cart"></i> Vendas
        </RouterLink>

        <RouterLink
          class="list-group-item list-group-item-action"
          :to="{ name: 'Leads' }"
          active-class="ativo"
          exact-active-class="active"
        >
          <i class="bi bi-caret-right"></i> Leads
        </RouterLink>

        <RouterLink
          class="list-group-item list-group-item-action"
          :to="{ name: 'Contratos' }"
          active-class="ativo"
          exact-active-class="active"
        >
          <i class="bi bi-caret-right"></i> Contratos
        </RouterLink>

        <RouterLink
          class="list-group-item list-group-item-action"
          :to="{ name: 'Servicos' }"
          active-class="ativo"
          exact-active-class="active"
        >
          <i class="bi bi-card-checklist"></i> Serviços
        </RouterLink>
      </div>

      <div class="w-100">
        <nav aria-label="breadcrumb" class="pt-1 ps-3">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>

        <div class="container-fluid">
          <RouterView />
        </div>
      </div>
    </div>

    <div class="rodape">
      <RouterView name="rodape" />
    </div>
  </div>
</template>


<style scoped>
.menu-superior {
  border-bottom: solid 1px #ccc;
}

.menu-esquerda {
  border-right: solid 1px #ccc;
  width: 250px;
}

.list-group-item {
  border-top: none;
  border-right: none;
}
/* 
.router-link-active {
  color: #fff;
  background-color: #65a1fa;
  border-color: #65a1fa;
}

.router-link-exact-active {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
} */

.ativo {
  color: #fff;
  background-color: #65a1fa;
  border-color: #65a1fa;
}

.rodape {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #ccc;
}

</style>