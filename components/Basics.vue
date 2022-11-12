<template>
  <div>
    <h1 class="text-3xl">Hi, {{name ? name : 'friend'}}.</h1>
    <h2 class="text-xl">{{label}}</h2>
    <p>{{workplace1name}}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    name: String,
    label: String,
    workplace1name: String
  })
</script>