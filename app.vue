<template>
  <div class="md:px-8">
    <Navigation />
    <NuxtPage />
  </div>
</template>

<script setup>
import "@fontsource-variable/lora";
import "@fontsource-variable/inter-tight";
</script>

<style>
h1,
h2,
h3,
h4 {
  font-family: "Lora Variable", serif;
}

p,
span,
button,
li,
a {
  font-family: "Inter Variable", sans-serif;
}

button {
  font-weight: 500;
  font-size: 0.9rem;
}
</style>
