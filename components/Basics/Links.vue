<template>
  <div class="flex flex-row justify-between text-sm items-center px-2">

    <a :href="`mailto:${email}`">
      <Icon name="fa6-solid:envelope" /> {{ email }}
    </a>

    <p v-if="phone">
      <Icon name="fa6-solid:phone" /> {{ phone }}
    </p>

    <a :href="url">
      <Icon name="fa6-solid:globe" /> {{ display }}
    </a>

    <p>
      <Icon name="fa6-solid:location-dot" /> {{ location }}
    </p>

    <span v-for="profile in profiles">
      <a :href="profile.url">
        <Icon v-if="profile.network === 'GitHub'" name="fa6-brands:github" />
        <Icon v-if="profile.network === 'LinkedIn'" name="fa6-brands:linkedin" />
        {{ profile.username }}
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