<script setup>
const navigation = {
  'Статистика': [
    { caption: 'Статистика', icon: 'mail', route: '/statistics' }
  ],
  'Склад': [
    { caption: 'Склад-1', icon: 'warehouse', route: '/warehouse' }
  ],
  'Производство': [
    { caption: 'Производство-1', icon: 'factory', route: '/manufacturing' }
  ],
}
</script>

<template>
  <q-list class="text-blue-1">
    <template v-for="(navs, section, idx) in navigation" :key="idx">
      <q-item-label header class="text-blue-2">{{ section }}</q-item-label>
      <q-separator color="blue-2" />
      <q-item v-for="(nav, idx) in navs" :key="idx" :to="nav.route" active-class="text-blue bg-blue-1">
        <q-item-section avatar>
          <q-icon :name="nav.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ nav.caption }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-list>
</template>