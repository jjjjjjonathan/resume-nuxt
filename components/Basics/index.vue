<template>
  <header id="basics" class=" flex flex-col bg-emerald-300 w-full p-4">
    <div class="flex flex-row justify-between items-end">
      <h1 class="text-3xl font-semibold">{{name.toUpperCase()}}</h1>
      <h2 class="text-2xl font-semibold">{{label.toUpperCase()}}</h2>
    </div>
    <BasicsLinks />
  </header>
</template>

<script setup>
  import { getBasics } from './helpers';
  const NAME = 'name';
  const LABEL = 'label'
  const name = getBasics(NAME);
  const label = getBasics(LABEL);
</script>