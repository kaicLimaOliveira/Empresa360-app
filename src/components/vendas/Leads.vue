<template>
  <div>
    <h1>Leads</h1>

    <table class="table">
      
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Telefone</th>
          <th scope="col"></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="dado in dados" :key="dado.id">
          <td>{{ dado.id }}</td>
          <td>{{ dado.nome }}</td>
          <td>{{ dado.telefone }}</td>
          <td>
            <!-- <RouterLink :to="`/home/vendas/leads/${dado.id}`" class="btn btn-sm btn-primary">
            </RouterLink> -->

            <RouterLink :to="{ name: 'Lead', params: { id: dado.id } }" class="btn btn-sm btn-primary"> 
              <i class="bi bi-pencil-square" style="cursor: pointer;"></i>
            </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin'
export default {
  name: "Leads",
  mixins: [ApiMixin],
  created() {
    this.getDataApi("http://localhost:3000/leads");
  },
};
</script>