<template>
  <main>
    <div class="flex flex-col items-center py-4 border-b-2 border-slate-800">
      <NuxtImg src="/logo_full.svg" width="800" />
    </div>
    <div class="flex flex-row py-3 border-b border-slate-800">
      <ul class="categories flex flex-row">
        <li
          v-for="category in categories"
          class="flex flex-row items-center group"
        >
          <button class="text-sm" :id="category.id">
            {{ category.title }}
          </button>
          <div class="w-2 h-2 rounded-full bg-black group-last:hidden mx-3" />
        </li>
      </ul>
    </div>
    <div class="bg-slate-100 grid grid-cols-3 gap-3 py-3">
      <div v-for="article in data">
        <div class="relative">
          <NuxtImg :src="article.urlToImage" />
        </div>
        <h3 class="font-semibold">{{ article.title }}</h3>
      </div>
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

const { data, pending, error, refresh } = await useFetch(
  "https://newsapi.org/v2/top-headlines",
  {
    query: {
      category: "general",
      country: "us",
    },
    headers: {
      Authorization: process.env.NUXT_NEWS_API_KEY,
    },
  }
);

data.value = await data.value.articles;
</script>

<style scoped></style>
