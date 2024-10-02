<script setup>
import { useRouter } from 'vue-router';

defineProps(["caption"])
const router = useRouter();

const handleBack = () => {
  router.back();
}
</script>

<template>
  <div class="q-mb-lg">
    <q-toolbar>
      <q-toolbar-title>{{ caption }}</q-toolbar-title>
      <q-input outlined dense label="Быстрый поиск">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      <slot name="buttons" />
    </q-toolbar>
    <q-separator />
  </div>
</template>