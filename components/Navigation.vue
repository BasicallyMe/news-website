<template>
  <nav class="py-4 mt-4 flex flex-row items-center justify-between">
    <div class="flex flex-row items-center">
      <div class="border-r-2 border-slate-700 pr-8 mr-8">
        <NuxtImg src="/logo.png" width="80" />
      </div>
      <ul class="flex flex-row items-center gap-8">
        <li>Stories</li>
        <li>Creator</li>
        <li>Community</li>
        <li>Subscribe</li>
      </ul>
    </div>
    <div class="flex flex-row gap-4 items-center">
      <Bell :size="18" />
      <button>Sign In</button>
    </div>
  </nav>
</template>

<script setup>
import { Bell } from "lucide-vue-next";
</script>

<style>
li {
  font-weight: 500;
  font-size: 0.9rem;
}
</style>
