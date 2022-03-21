<template>
  <h5>Componente opções</h5>
</template>

<script>
export default {
  name: "Opcoes",
  props: ["id"],
  beforeRouteUpdate() {
    console.log("Guarda de componente beforeRouteUpdate");
  },
};
</script>