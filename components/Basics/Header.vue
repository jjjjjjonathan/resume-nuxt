<template>
  <div
    class="w-full flex flex-col medium:flex-row justify-between small:justify-around medium:justify-between items-center small:items-start medium:items-end print:flex-row print:items-end print:justify-between">

    <h1 class="order-first text-3xl xs:text-4xl font-semibold text-center xs:text-right">{{ name.toUpperCase() }}</h1>
    <UiPdfButton />

    <h2 class="order-2 medium:order-3 text-xl xs:text-2xl font-semibold text-center xs:text-right">{{
        label.toUpperCase()
    }}</h2>
  </div>
</template>

<script setup>
const name = getBasics(NAME);
const label = getBasics(LABEL);
</script>