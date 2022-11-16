<template>
  <section class="flex flex-col justify-start px-4 col-span-11 order-0 h-full letter:-mb-3">
    <ContentHeading :title="SUMMARY" />
    <p class="text-sm px-4 pt-2">{{ summary }}</p>
  </section>
</template>

<script setup>
import { getBasics } from '../Basics/helpers';
const SUMMARY = 'summary';
const summary = getBasics(SUMMARY);
</script>