<template>
  <div class="flex flex-row justify-between">
    <p>{{email}}</p>
    <a :href="url.url">{{url.display}}</a>

    <p>{{location}}</p>

    <span v-for="profile in profiles">
      <a :href="profile.url">{{`${profile.network}: ${profile.username}`}}</a>
    </span>
  </div>
</template>

<script setup>
  import { getHeaderLinks, getProfiles } from '../Basics/helpers'

  const EMAIL = 'email';
  const URL = 'url';
  const LOCATION = 'location'

  const email = getHeaderLinks(EMAIL);
  const url = getHeaderLinks(URL)
  const location = getHeaderLinks(LOCATION)
  const profiles = getProfiles();
</script>