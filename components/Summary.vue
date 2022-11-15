<template>
  <section class="flex flex-col px-4">
    <h3 class="text-lg font-semibold pt-2">SUMMARY</h3>
    <p class="text-sm">{{summary}}</p>
  </section>
</template>

<script setup>
  import { getBasics } from './Basics/helpers';
  const SUMMARY = 'summary'
  const summary = getBasics(SUMMARY)
</script>