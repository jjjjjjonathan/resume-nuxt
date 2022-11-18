<template>
  <div v-for="project in projects" class="px-2 py-1">

    <div class="flex flex-row justify-between items-center">
      <h4 class="text-md font-semibold text-left hover:underline"><a :href="project.url" rel="noopener noreferrer"
          target="_blank">{{
              project.name
          }}</a>
      </h4>
      <span class="font-medium text-sm text-right">{{ project.date }}</span>
    </div>

    <p class="text-sm px-1 pb-0.5">{{ project.description }}</p>

    <div class="flex flex-row flex-wrap justify-start items-center">
      <Tag v-for="tag in project.keywords" :tagPhrase="tag" />
    </div>
  </div>

</template>

<script setup>
import { getProjects } from './helpers';

const projects = getProjects();
</script>
