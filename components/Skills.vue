<template>
  <div class="px-2 py-1" v-for="section in skillSections">

    <h4 class="text-md font-semibold">{{ section.name }}</h4>

    <div class="flex flex-row flex-wrap justify-start items-center">
      <UiTag v-for="tag of section.keywords" :tagPhrase="tag" />

    </div>
  </div>
</template>

<script setup>

const skillSections = getSkills()

</script>