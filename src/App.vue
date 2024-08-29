<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="ALEF logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <nav class="header-nav">
      <RouterLink to="/">Форма</RouterLink>
      <RouterLink to="/preview">Превью</RouterLink>
    </nav>

    <span></span>
  </header>
  <section class="app-content">
    <RouterView />
  </section>
  <footer>
    <span class="footer-content"> all rights reserved </span>
  </footer>
</template>

<style scoped></style>
