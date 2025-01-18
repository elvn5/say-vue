<template>
  <authenticator>
    <template #default="{ signOut }">
      <Todos />
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>

<script setup lang="ts">
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
</script>
