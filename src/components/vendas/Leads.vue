<template>
  <h1>Leads</h1>
  <p>{{ dados }}</p>
</template>

<script>
export default {
  name: "Leads",
  data: () => ({
    dados: "",
  }),
  methods: {
    getDadosApi() {
      const getJSON = async () => {
        const response = await fetch("http://localhost:3000/leads");

        this.dados = await response.json();
      };

      getJSON();
    },
  },
  created() {
    this.getDadosApi();
  },
};
</script>