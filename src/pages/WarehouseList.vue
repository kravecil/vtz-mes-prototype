<script setup>
import { ref, onMounted } from "vue";
import ListHeader from "@/components/ListHeader.vue";
import _ from "lodash";
import { faker } from "@faker-js/faker/locale/ru";
import { DateTime } from "luxon";

const MAX_ITEMS = 50;
const MAX_COUNT = 100;

const tab = ref("balance");

const items = ref([]);

function createFakeItem() {
  const TYPES = [
    { type: "assembly", prefix: "Узел" },
    { type: "part", prefix: "Деталь" },
    { type: "material", prefix: "Материал" },
  ];

  const UNITS = ["шт", "кг", "л", "м3"];

  const randomType = _.sample(TYPES);

  const name = `${randomType.prefix}_${faker.word.adjective()}`;
  const type = randomType.type;
  const count = _.random(1, MAX_COUNT);
  const countLabel = count + ' ' + (randomType.type === 'material'? _.sample(UNITS) : 'шт')

  const now = DateTime.now();
  let sinceAt = now.minus({ days: _.random(600) });
  const daysPassed = now.diff(sinceAt).as("days");

  sinceAt = sinceAt.toFormat('dd.MM.yyyy')

  return {
    name,
    type,
    count,
    countLabel,
    sinceAt,
    daysPassed,
  };
}

function generateItems() {
  items.value = [...Array(MAX_ITEMS)].map(() => createFakeItem());
}

onMounted(() => generateItems());
</script>

<template>
  <q-page padding>
    <list-header caption="Склад" />

    <q-tabs v-model="tab" align="left" class="text-deep-orange-10 q-mb-md">
      <q-tab name="balance" label="Остатки" />
      <q-tab name="deficit" label="Дефицит" />
      <q-tab name="proficit" label="Профицит" />
    </q-tabs>

    <q-list>
      <q-item
        v-for="(item, idx) in items"
        :key="idx"
        v-ripple
        clickable
        class="rounded-borders q-mb-md bg-deep-orange-1"
      >
        <q-item-section>{{ item.name }}</q-item-section>
        <q-item-section class="text-center text-weight-light">{{ item.countLabel }}</q-item-section>
        <q-item-section side>
          <span class="text-weight-bold">{{ item.sinceAt }}</span>
          <q-badge :label="item.daysPassed" color="deep-orange-6" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
