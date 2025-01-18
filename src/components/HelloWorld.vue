<template>
  <button @click="signUp">Sign Up</button>
</template>

<script setup lang="ts">
import { Auth } from "aws-amplify";

signUp = async (email) => {
  try {
    const result = await Auth.signUp({
      username: "",
      password: "",
      attributes: { email },
    });
    console.log("Sign-up success:", result);
  } catch (error) {
    console.error("Error signing up:", error);
  }
};
</script>
