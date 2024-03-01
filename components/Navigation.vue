<template>
  <nav class="py-5 mt-4 flex flex-row items-center justify-between">
    <div class="flex flex-row items-center">
      <div class="mr-8">
        <NuxtImg src="/logo.svg" width="40" />
      </div>
      <ul class="flex flex-row items-center gap-8 ml-8">
        <li>
          <NuxtLink
            href="/"
            class="font-medium text-sm text-slate-400 hover:text-slate-800"
            >News</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            href="/product"
            class="font-medium text-sm text-slate-400 hover:text-slate-800"
            >Product</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            href="/solutions"
            class="font-medium text-sm text-slate-400 hover:text-slate-800"
            >Solutions</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            href="/pricing"
            class="font-medium text-sm text-slate-400 hover:text-slate-800"
            >Pricing</NuxtLink
          >
        </li>
      </ul>
    </div>
    <div class="flex flex-row gap-4 items-center">
      <NuxtLink
        class="font-medium text-sm"
        href="auth/signin"
        >Sign in</NuxtLink
      >
      <NuxtLink class="font-medium text-sm" href="auth/signup"
        >Sign up</NuxtLink
      >
    </div>
  </nav>
</template>

<script setup></script>

<style>
.router-link-active {
  color: rgb(30, 41, 59);
}
</style>
