<script setup>
import { useRouter } from "vue-router";

defineProps(["caption"]);
const router = useRouter();

const handleBack = () => {
  router.back();
};
</script>

<template>
  <div class="q-mb-lg">
    <q-toolbar>
      <q-toolbar-title>{{ caption }}</q-toolbar-title>
      <div class="q-gutter-sm q-mx-sm">
        <slot name="buttons" />
      </div>

      <q-input outlined dense label="Быстрый поиск">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </q-toolbar>
    <q-separator />
  </div>
</template>
