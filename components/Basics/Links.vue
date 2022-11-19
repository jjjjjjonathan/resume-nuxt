<template>
  <div
    class="
          flex flex-wrap flex-row
          small:flex-col medium:flex-row print:flex-row
          justify-center small:justify-between medium:justify-around gap-x-4 small:gap-0 text-sm items-end medium:items-center print:items-center print:justify-between px-2">

    <a :href="`mailto:${email}`" rel="noopener noreferrer" target="_blank">
      <div class="flex flex-row small:flex-row-reverse medium:flex-row items-center gap-0.5">
        <Icon name="fa6-solid:envelope" />
        <span class="hover:underline">{{ email }}</span>
      </div>

    </a>

    <div v-if="phone">
      <div class="flex flex-row small:flex-row-reverse medium:flex-row items-center gap-0.5">
        <Icon name="fa6-solid:phone" />
        <span>{{ phone }}</span>
      </div>

    </div>

    <a :href="url" rel="noopener noreferrer" target="_blank">
      <div class="flex flex-row small:flex-row-reverse medium:flex-row items-center gap-0.5">
        <Icon name="fa6-solid:globe" />
        <span class="hover:underline">{{ display }}</span>
      </div>

    </a>


    <div class="flex flex-row small:flex-row-reverse medium:flex-row items-center gap-0.5">
      <Icon name="fa6-solid:location-dot" />
      <span>{{ location }}</span>
    </div>



    <span v-for="profile in profiles">
      <a :href="profile.url" rel="noopener noreferrer" target="_blank">
        <div class="flex flex-row small:flex-row-reverse medium:flex-row items-center gap-0.5">

          <Icon v-if="profile.network === 'GitHub'" name="fa6-brands:github" />
          <Icon v-if="profile.network === 'LinkedIn'" name="fa6-brands:linkedin" />
          <span class="hover:underline">{{ profile.username }}</span>
        </div>

      </a>
    </span>
  </div>
</template>

<script setup>
const email = getBasics(EMAIL);
const { url, display } = getBasics(URL);
const location = getBasics(LOCATION);
const profiles = getBasics(PROFILES);
const phone = getBasics(PHONE);
</script>