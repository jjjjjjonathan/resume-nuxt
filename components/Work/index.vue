<template>

  <div class="px-2 py-1" v-for="job in work">

    <div class="flex flex-row justify-between items-center">
      <h4 class="text-md font-semibold text-left">{{ job.position }}
      </h4>
      <span class="font-medium text-sm text-right">{{ job.startDate }}–{{ job.endDate }}</span>
    </div>
    <p class="text-sm italic">{{ job.name }}</p>
    <p class="text-sm px-1 pt-1 pb-2">{{ job.summary }}</p>
    <ul>
      <li class="flex ml-2 mb-1 flex-row justify-start items-center" v-for="highlight in job.highlights">

        <Icon name="fa6-solid:circle-check" class="text-emerald-600 mr-2" />
        <div>
          <p class="text-sm font-medium my-auto">{{ highlight }}</p>
        </div>



      </li>
    </ul>

  </div>

</template>

<script setup>

import { getWork } from './helpers';

const work = getWork()

</script>