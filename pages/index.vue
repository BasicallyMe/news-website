<template>
  <main>
    <div class="flex flex-col items-center py-4 border-b-2 border-slate-800">
      <NuxtImg src="/logo_full.svg" width="800" />
    </div>
    <div class="flex flex-row py-3 border-b border-slate-800">
      <ul class="categories flex flex-row gap-2">
        <li v-for="category in categories">
          <button class="text-sm" :id="category.id">
            {{ category.title }}
          </button>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
const categories = [
  {
    id: "world",
    category: ["general", "world"],
    title: "World News",
  },
  {
    id: "business",
    category: ["business", "finance"],
    title: "Business and Finance",
  },
  {
    id: "science",
    category: ["science", "technology"],
    title: "Science and Technology",
  },
  {
    id: "entertainment",
    category: ["entertainment"],
    title: "Entertainment",
  },
  {
    id: "sports",
    category: ["sports"],
    title: "Sports",
  },
  {
    id: "health",
    category: ["health"],
    title: "Wellness",
  },
  {
    id: "lifestyle",
    category: ["lifestyle"],
    title: "Lifestyle",
  },
];
</script>

<style scoped></style>
