<template>
  <div class="px-2 py-1" v-for="school in education">

    <div class="flex flex-row justify-between items-center">
      <h4 class="text-md font-semibold text-left">{{ school.institution }}
      </h4>
      <span class="font-medium text-sm text-right">{{ school.date }}</span>
    </div>
    <div class="px-1">
      <p class="text-sm italic">{{ school.studyType }}</p>
      <p class="text-sm">{{ school.area }}</p>
      <p class="text-xs font-light" v-if="school.note">{{ school.note }}</p>
    </div>



  </div>
</template>

<script setup>

const education = getEducation();

</script>