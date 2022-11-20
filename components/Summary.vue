<template>
  <p class="text-sm px-4 pt-2">
    {{ summary }}
  </p>
</template>

<script setup>
const summary = getBasics(SUMMARY);
</script>