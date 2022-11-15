<template>
  <div class="grid grid-cols-11 gap-4 justify-center w-full items-center">
    <div class="col-span-6">
      <section class="px-4">
        <ContentHeading :title="'projects'" :full="true" />
      </section>
      <section class="px-4">
        <ContentHeading :title="'work'" :full="true" />
      </section>
    </div>
    <div class="col-span-5">
      <section class="px-4">
        <ContentHeading :title="'skills'" :full="true" />
      </section>
      <section class="px-4">
        <ContentHeading :title="'education'" :full="true" />
      </section>
    </div>
  </div>
</template>