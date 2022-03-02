<template>
  <div>
    <nav class="navbar navbar-light bg-light menu-superior">
      <div class="container">
        <a class="navbar-brand" href="#">Empresa 360</a>
        <div class="navbar-nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" :to="{ path: '/' }">
                Voltar
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="row mt-5">
      <div class="col-6 offset-3">
        <div class="card">
          <p class="card-header">Entrar</p>
          <div class="card-body">
            <div class="mb-3">
              <input type="email" class="form-control" placeholder="E-mail" />
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" placeholder="Senha" />
            </div>
            <button class="btn btn-primary" @click="navegarPara">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    navegarPara() {
      // this.$router.replace("/home");
      this.$router.push("/home");

      // this.$router.forward(); //avança o historico de navegação
      // this.$router.back(); //retorna o historico de navegação

      // this.$router.go();
    },
  },
};
</script>