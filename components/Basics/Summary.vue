<template>
  <section class="flex flex-col px-4">
    <ContentHeading :title="SUMMARY" :full="true" />
    <p class="text-sm px-4 py-2">{{summary}}</p>
  </section>
</template>

<script setup>
  import { getBasics } from '../Basics/helpers';
  const SUMMARY = 'summary'
  const summary = getBasics(SUMMARY)
</script>