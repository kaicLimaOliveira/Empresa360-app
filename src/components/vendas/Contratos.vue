<template>
  <div>
    <div class="card mb-4">
      <div class="card-header">Contratos</div>
      <div class="card-body">
        <div class="row">
            <div class="col-6">
                <label class="form-label">ID Contrato:</label>
                <input type="text" class="form-control">
            </div>
            <div class="col-6">
              <label class="form-label">Data início:</label>
              <div class="input-group">
                <input type="date" class="form-control">
                <input type="date" class="form-control">
              </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
          <button type="button" class="btn btn-primary">Pesquisar</button>
      </div>
    </div>

    <table class="table">
      
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Lead</th>
          <th scope="col">Serviço</th>
          <th scope="col">Data início</th>
          <th scope="col">Data fim</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="dado in dados" :key="dado.id">
          <td>{{ dado.id }}</td>
          <td>{{ dado.lead.nome }}</td>
          <td>{{ dado.servico.servico }}</td>
          <td>{{ dado.data_inicio }}</td>
          <td>{{ dado.data_fim }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin'
export default {
  name: "Contratos",
  mixins: [ApiMixin],
  data: () => ({
    paramsRelationship: '_expand=lead&_expand=servico'
  }),
  created() {
    const queryParams = new URLSearchParams(this.$route.query).toString()
    const url = `http://localhost:3000/contratos?${this.paramsRelationship}&${queryParams}`
    this.getDataApi(url);
  },
  beforeRouteUpdate(to, from, next) {
    const queryParams = new URLSearchParams(to.query).toString()
    const url = `http://localhost:3000/contratos?${this.paramsRelationship}&${queryParams}`

    this.getDataApi(url)
    next()
  }
};
</script>