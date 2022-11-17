<template>
  <header id="basics" class="flex flex-col small:flex-row medium:flex-col bg-emerald-400 w-full p-4 justify-between">
    <div
      class="flex flex-col medium:flex-row justify-between items-center small:items-start medium:items-end print:flex-row print:items-end">
      <h1 class="text-4xl font-semibold text-center xs:text-right">{{ name.toUpperCase() }}</h1>
      <h2 class="text-2xl font-semibold text-center xs:text-right">{{ label.toUpperCase() }}</h2>
    </div>
    <BasicsLinks />
  </header>
</template>

<script setup>
import { getBasics } from './helpers';
const NAME = 'name';
const LABEL = 'label';
const name = getBasics(NAME);
const label = getBasics(LABEL);
</script>
