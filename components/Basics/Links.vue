<template>
  <div
    class="flex flex-wrap flex-row small:flex-col medium:flex-row justify-center small:justify-between gap-x-4 small:gap-0 text-sm items-end medium:items-center px-2">

    <a :href="`mailto:${email}`" rel="noopener noreferrer" target="_blank">
      <div class="flex flex-row small:flex-row-reverse medium:flex-row items-center gap-0.5">
        <Icon name="fa6-solid:envelope" />
        <span>{{ email }}</span>
      </div>

    </a>

    <div v-if="phone">
      <div class="flex flex-row small:flex-row-reverse medium:flex-row items-center gap-0.5">
        <Icon name="fa6-solid:phone" />
        <p>{{ phone }}</p>
      </div>

    </div>

    <a :href="url" rel="noopener noreferrer" target="_blank">
      <div class="flex flex-row small:flex-row-reverse medium:flex-row items-center gap-0.5">
        <Icon name="fa6-solid:globe" />
        <span>{{ display }}</span>
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
          <span>{{ profile.username }}</span>
        </div>

      </a>
    </span>
  </div>
</template>

<script setup>
import { getBasics } from './helpers';

const EMAIL = 'email';
const URL = 'url';
const LOCATION = 'location';
const PROFILES = 'profiles';
const PHONE = 'phone';

const email = getBasics(EMAIL);
const { url, display } = getBasics(URL);
const location = getBasics(LOCATION);
const profiles = getBasics(PROFILES);
const phone = getBasics(PHONE);
</script>