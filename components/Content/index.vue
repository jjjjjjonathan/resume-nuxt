<template>
  <div class="grid grid-cols-11 justify-center w-full h-full items-center mb-5 letter:mb-0">
    <BasicsSummary />

    <section class="px-4 col-span-11 medium:col-span-6 order-2 medium:order-1">
      <ContentHeading :title="'projects'" />
      <Projects />
    </section>

    <section class="px-4 col-span-11 medium:col-span-5 order-1 medium:order-2">
      <ContentHeading :title="'skills'" />
      <Skills />
    </section>

    <section class="px-4 col-span-11 medium:col-span-6 order-3">
      <ContentHeading :title="'work'" />
      <Work />
    </section>

    <section class="px-4 col-span-11 medium:col-span-5 order-4">
      <ContentHeading :title="'education'" />
      <Education />
    </section>

  </div>
</template>
