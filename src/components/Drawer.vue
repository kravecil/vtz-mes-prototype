<script setup>
import { ref } from 'vue'

const drawer = ref(true)
</script>

<template>
  <q-drawer
    v-model="drawer"
    :width="200"
    class="bg-blue">
    <!--  -->
  </q-drawer>
</template>