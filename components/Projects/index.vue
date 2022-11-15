<template>
  <div v-for="project in projects" class="p-2">

    <div class="flex flex-row justify-between items-center">
      <h4 class="text-md font-semibold"><a :href="project.url">{{ project.name }}</a>
      </h4>
      <span class="font-medium text-sm">{{ project.startDate }} - {{ project.endDate }}</span>
    </div>

    <p class="text-sm px-1">{{ project.description }}</p>
    <p class="text-sm">{{ project.keywords.join(', ') }}</p>
  </div>

</template>

<script setup>
import { getProjects } from './helpers';

const projects = getProjects();
</script>
