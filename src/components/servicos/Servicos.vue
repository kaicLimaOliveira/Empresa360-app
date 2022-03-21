<template>
  <h1>Serviços</h1>
  <div class="row">
    <div
      class="col my-4 d-flex justify-content-around"
      v-for="dado in dados"
      :key="dado.id"
    >
      <div class="card" style="width: 11rem">
        <img :src="`/img/${dado.icone}`" class="card-img-top" />

        <div class="card-body text-center">
          <RouterLink
            :to="{ name: 'Servico', params: { id: dado.id } }"
            class="nav-link text-muted"
          >
            <p class="card-text">{{ dado.servico }}</p>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>

  <RouterView class="mt=3" />
  <RouterView name="opcoes" />
  <RouterView name="indicadores" />
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";

export default {
  name: "Serviços",
  mixins: [ApiMixin],
  created() {
    this.getDataApi("http://localhost:3000/servicos");
  },
};
</script>