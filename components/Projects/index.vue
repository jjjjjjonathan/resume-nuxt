<template>
  <h4 v-for="project in projectNames" class="text-md font-medium">
    {{ project }}
  </h4>
</template>

<script setup>
import { getProjectNames } from './helpers';

const projectNames = getProjectNames();
</script>
