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
    <div
      class="grid grid-cols-7 2xl:grid-cols-4 gap-6 py-3 articles"
    >
      <div v-for="article in data" class="article">
        <div class="mb-2" v-if="article.urlToImage">
          <NuxtImg
            :src="article.urlToImage"
            placeholder="https://placehold.co/600x400"
          />
        </div>
        <div class="py-3 border-t-2 border-black border-b">
          <h3 class="font-semibold mb-2">{{ article.title }}</h3>
          <p class="text-sm border-t border-black py-2">
            {{ article.description }}
          </p>
          <div class="flex flex-row items-center justify-between">
            <div class="text-xs text-slate-400">8 min read</div>
            <div class="flex flex-row items-center gap-3">
              <button>
                <Bookmark :size="18" :stroke-width="1.5" />
              </button>
              <button
                class="rounded-full w-6 h-6 flex flex-row items-center justify-center text-center bg-slate-100"
              >
                <MoreHorizontal :size="16" :stroke-width="1.25" />
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { Bookmark, MoreHorizontal } from "lucide-vue-next";
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

const articles = useState("articles");

const { data, pending, error, refresh } = await useFetch(
  "https://newsapi.org/v2/top-headlines",
  {
    query: {
      category: "general",
      country: "us",
      pageSize: 20,
    },
    headers: {
      Authorization: process.env.NUXT_NEWS_API_KEY,
    },
  }
);

await callOnce(async () => {
  articles.value = await data.value.articles;
});

data.value = await data.value.articles
  .filter((item) => item.description !== null)
  .slice(0, 9);
</script>

<style scoped>
.articles div {
  grid-column: span 2 / span 2;
}
.articles .article:nth-child(3n + 2) {
  grid-column: span 3 / span 3;
  font-size: 1.5rem;
}
.article img {
  width: 100%;
  /* height: 100%; */
}
</style>
