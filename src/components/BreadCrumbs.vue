<template>
  <div class="sticky top-0 z-20 hidden h-16 w-full items-center bg-gradient-to-r from-white to-white/50 to-70% px-6 text-sm font-light text-[#3b86c3] shadow backdrop-blur-sm md:flex">
    <nav aria-label="breadcrumb">   
      <ol class="flex">
        <li class="flex items-center justify-center">
          <router-link to="/">Home</router-link>
        </li>

        <li  v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center justify-center px-2">
          <router-link v-if="crumb.path !== '/'" :to="crumb.path">{{ crumb.text }}</router-link>
        </li>
      </ol>
    </nav>
  </div>
</template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  const breadcrumbs = computed(() => {
    const crumbs = [];
    route.matched.forEach((record) => {
      if (record.meta.breadcrumb) {
        crumbs.push({
          path: record.path,
          text: record.meta.breadcrumb
        });
      }
    });
    return crumbs;
  });
  </script>
  