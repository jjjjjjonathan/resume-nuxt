<template>

  <div class="px-2 py-1" v-for="job in work">

    <div class="flex flex-row justify-between items-center">
      <h4 class="text-md font-semibold">{{ job.position }}
      </h4>
      <span class="font-medium text-sm">{{ job.startDate }} - {{ job.endDate }}</span>
    </div>
    <p class="text-sm italic">{{ job.name }}</p>
    <p class="text-sm px-1">{{ job.summary }}</p>
    <ul>
      <li class="text-sm" v-for="highlight in job.highlights">
        {{ highlight }}
      </li>
    </ul>

  </div>

</template>

<script setup>

import { getWork } from './helpers';

const work = getWork()

</script>