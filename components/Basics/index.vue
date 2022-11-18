<template>
  <header id="basics" class="
    bg-emerald-400
    w-full
    flex flex-col small:flex-row medium:flex-col print:flex-col
    justify-between
    p-4">
    <div
      class="w-full flex flex-col medium:flex-row justify-between small:justify-around medium:justify-between items-center small:items-start medium:items-end print:flex-row print:items-end print:justify-between">
      <h1 class="order-first text-3xl xs:text-4xl font-semibold text-center xs:text-right">{{ name.toUpperCase() }}</h1>
      <button class="
        order-3 medium:order-2
        my-auto
        rounded-lg bg-emerald-200
        hover:bg-emerald-300
        shadow-md
        p-1
        block print:hidden"><a href="https://resume.jcheng.ca/Cheng_Jonathan-resume.pdf"><span
            class="inline medium:hidden large:inline">View
            as
          </span>
          <Icon name="fa6-regular:file-pdf" /> PDF
        </a>
      </button>
      <h2 class="order-2 medium:order-3 text-xl xs:text-2xl font-semibold text-center xs:text-right">{{
          label.toUpperCase()
      }}</h2>
    </div>
    <BasicsLinks />
  </header>
</template>

<script setup>
import { getBasics } from './helpers';
const NAME = 'name';
const LABEL = 'label';
const name = getBasics(NAME);
const label = getBasics(LABEL);
</script>
