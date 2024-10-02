<script setup>
import { ref } from 'vue';

import NavigationLeft from '@/components/NavigationLeft.vue';

const drawer = ref(true)
</script>

<template>
  <q-drawer v-model="drawer" :width="200" class="bg-grey-10 q-pt-md">
    <q-scroll-area class="fit">
      <navigation-left />
    </q-scroll-area>
  </q-drawer>
</template>