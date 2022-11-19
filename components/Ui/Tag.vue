<template>
  <div class="bg-emerald-200 m-0.5 p-1 rounded-lg">
    <p class="text-xs">{{ tagPhrase }}</p>
  </div>

</template>

<script setup>

const props = defineProps({
  tagPhrase: String
});

</script>