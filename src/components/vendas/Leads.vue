<template>
  <h1>Leads</h1>
  <p>{{ data }}</p>
</template>

<script>
export default {
  name: "Leads",
  data: () => ({
    data: ''
  }),
  methods: {
    getRequestLeads() {
      const getRequest = async () => {
        const response = await fetch('http://localhost:3000/leads', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).catch(e => console.log(e))

        console.log(await response);
        const res = await response.json()
        this.data = await response.json()
        console.log(res);
      }

      getRequest()
    },
    created() {
      this.getRequestLeads()
    }
  }
};
</script>