<script setup>
// CPM BREADCRUMBS BY JAN BEHRENS
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const breadcrumbs = computed(() => {
  const crumbs = [];
  route.matched.forEach((record) => {
    if (record.meta.breadcrumb) {
      const path = record.path
      const text = record.meta.breadcrumb
      crumbs.push({path,text});
    }
  });
  return crumbs;
});
</script>

<template>
  <div class="breadcrumb">
    <nav aria-label="breadcrumb">   
      <ul>
        <li v-for="(crumb, index) in breadcrumbs" :key="index">
          <router-link :to="crumb.path">{{ crumb.text }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.breadcrumb {@apply sticky top-0 z-20 hidden h-16 w-full items-center bg-gradient-to-r from-white to-white/50 px-6 text-sm font-light text-primary-500 shadow backdrop-blur-sm md:flex;}
.breadcrumb nav ul {@apply flex items-center justify-center space-x-3}
.breadcrumb nav ul li {@apply flex items-center justify-center text-primary-300 h-full;}
.breadcrumb nav ul li:hover {@apply text-primary-700;}
.breadcrumb nav ul li:last-child {@apply text-primary-500 font-medium}
</style>
  

  