<template>
  <div>
    <h5 class="m-4">{{ dados.id }} - {{ dados.nome }}</h5>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">ID</label>
      <div class="col-sm-10">
        <input type="text" class="form-control-plaintext" :value="dados.id" />
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Nome</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" :value="dados.nome" />
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Telefone</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" :value="dados.telefone" />
      </div>
    </div>

    <div class="col-auto d-flex justify-content-around mt-5">
      <button
        type="button"
        class="btn btn-warning"
        @click="$router.push({ name: 'Leads' })"
      >
        Voltar
      </button>
      <button type="button" class="btn btn-primary">Atualizar</button>
    </div>
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";

export default {
  name: "Lead",
  props: ["id", "outroParametro"],
  mixins: [ApiMixin],
  created() {
    this.getDataApi(`http://localhost:3000/leads/${this.id}`);
  },
  beforeRouteLeave() {
    const confirm = window.confirm("Deseja sair deste formulário");

    return confirm;
  },
};
</script>