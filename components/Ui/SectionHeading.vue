<template>
  <div class="bg-emerald-100 mt-4 w-full">
    <h3 class="text-lg font-semibold px-2 flex items-center text-gray-900">
      {{ title.toUpperCase() }}
    </h3>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>
