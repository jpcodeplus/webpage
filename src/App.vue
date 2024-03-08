<script setup>
import { ref } from 'vue';

import SocialIcons from './components/SocialIcons.vue';
import Breadcrumbs from './components/CPM/CPM_Breadcrumbs.vue';
import MainMenu from './components/CPM/CPM_Menu.vue';
import HeadHexagon from './components/HeadHexagon.vue';

 const isMenuVisible = ref(false);

 function toggleMenu() {
  isMenuVisible.value = !isMenuVisible.value;
}

</script>

<template>
  
<div id="cpm-layout" class="container relative mx-auto flex min-h-screen max-w-7xl flex-col md:flex-row">
    <div class="fixed top-0 z-10 h-60 w-full max-w-7xl overflow-hidden rounded-md rounded-t-none bg-gray-200">
      <HeadHexagon/>
    </div>

    <header class="sticky top-0 z-20 flex w-full flex-col bg-slate-300 md:h-screen md:max-w-80 md:bg-transparent">
      <div class="flex shadow-lg md:shadow-none w-full items-center justify-between md:flex-col">
        <div class="flex items-center gap-3 md:flex-col">
          <div class="m-2 h-16 w-16 rounded-md shadow outline outline-2 outline-white md:my-4 md:h-48 md:w-48 md:-rotate-2">
            <img class="object-contain" src="@/assets/webentwickler-karlsruhe-profilbild.png" />
          </div>
          <div>
            <h3 class="line-clamp-1 max-w-72 overflow-hidden text-xl font-bold uppercase text-slate-700">Jan Behrens</h3>
            <h3 class="text-xs uppercase text-slate-500">Webentwickler</h3>
          </div>
        </div>

        <button @click="toggleMenu" class="m-2 h-12 w-12 rounded-full bg-slate-300 md:hidden">BTN</button>
      </div>

      <nav :class="{ 'hidden md:flex': !isMenuVisible, 'flex': isMenuVisible }" class="h-full flex flex-col justify-between z-20 bg-slate-100 md:bg-transparent">
       
        <div id="main-menu" class="m-2 flex w-auto flex-col space-y-3  rounded-md  p-6 px-3 text-center text-lg md:m-2">
          <MainMenu/>
        </div>

        <div id="social-icons" class="flex justify-center my-3 rounded-full bg-slate-100 mx-auto  border border-slate-200">
          <SocialIcons/>
        </div>
        
      </nav>
    </header>

    <div class="grow-1 md:mt-44 z-30 w-full pointer-events-all">
      <main>

        <Breadcrumbs/>

        <div class="bg-white z-10">
          <RouterView/>
        </div>
      </main>
      <footer>Hallo ich bin der Footer</footer>
    </div>
  </div>
</template>
