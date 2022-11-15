<template>
  <div class="p-2" v-for="section in skillSections">

    <h4 class="text-md font-semibold">{{ section.name }}</h4>
    <p class="text-sm font-medium">{{ section.keywords.join(', ') }}</p>
  </div>
</template>

<script setup>

import { getSkills } from './helpers';

const skillSections = getSkills()

</script>