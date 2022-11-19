<template>
  <section class="flex flex-col justify-start px-4 col-span-11 order-0 h-full">
    <UiSectionHeading :title="SUMMARY" />
    <p class="text-sm px-4 pt-2">{{ summary }}</p>
  </section>
</template>

<script setup>
const summary = getBasics(SUMMARY);
</script>