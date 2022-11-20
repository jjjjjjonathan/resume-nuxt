<template>
  <section class="flex flex-col justify-start px-4 h-full">
    <UiSectionHeading :title="title" />
    <slot />
  </section>
</template>

<script setup>
const props = defineProps({
  title: String
});
</script>