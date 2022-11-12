<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <Basics :name="basics.name" :label="basics.label" :workplace1name="work[0].name" />
  </div>
</template>

<script setup>
  import { basics, work } from './assets/resume.json'
</script>
