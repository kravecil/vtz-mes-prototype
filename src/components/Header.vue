<script setup>
import { useCoreStore } from "@/stores/core";
const core = useCoreStore();
</script>

<template>
  <q-header bordered class="bg-black">
    <q-toolbar>
      <q-btn icon="menu" flat dense round @click="core.drawer = !core.drawer" />
      <q-toolbar-title>
        ЕИС: <span class="text-weight-thin">Диспетчеризация</span>
      </q-toolbar-title>
      <q-separator vertical spaced inset dark />
      <div class="text-deep-orange-5">Галлямов Марат Асгатович</div>
    </q-toolbar>
  </q-header>
</template>
