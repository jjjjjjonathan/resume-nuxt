<template>
  <div class="grid grid-cols-11 justify-center w-full items-center">
    <div class="col-span-6 h-full flex flex-col">
      <section class="px-4">
        <ContentHeading :title="'projects'" />
        <Projects />
      </section>
      <section class="px-4">
        <ContentHeading :title="'work'" />
        <Work />
      </section>
    </div>
    <div class="col-span-5 h-full flex flex-col">
      <section class="px-4">
        <ContentHeading :title="'skills'" />
        <Skills />
      </section>
      <section class="px-4">
        <ContentHeading :title="'education'" />
        <Education />
      </section>
    </div>
  </div>
</template>
