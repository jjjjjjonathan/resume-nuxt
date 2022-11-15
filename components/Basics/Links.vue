<template>
  <div class="flex flex-row justify-between text-sm">
    <p>{{email}}</p>
    <a :href="url">{{display}}</a>

    <p>{{location}}</p>

    <span v-for="profile in profiles">
      <a :href="profile.url">{{`${profile.network}: ${profile.username}`}}</a>
    </span>
  </div>
</template>

<script setup>
  import { getBasics } from './helpers'

  const EMAIL = 'email';
  const URL = 'url';
  const LOCATION = 'location'
  const PROFILES = 'profiles'

  const email = getBasics(EMAIL);
  const { url, display } = getBasics(URL)
  const location = getBasics(LOCATION)
  const profiles = getBasics(PROFILES);
</script>