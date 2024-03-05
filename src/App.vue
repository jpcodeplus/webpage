<script setup>
 import SocialIcons from './components/SocialIcons.vue';
</script>


<template>
<main class="relative mx-auto flex max-h-screen w-full max-w-screen-xl justify-center gap-3">
  <div id="main-menu" class="abso z-20 h-screen w-1/3 max-w-80">
  
  <div class="sticky top-0 z-20 flex h-screen flex-col">

    <!-- Top -->
    <div class="mt-2">
      <img class="mx-auto my-6 aspect-square w-48 -rotate-2 rounded-md border border-slate-100 object-cover outline-dashed outline-1 outline-offset-4 outline-slate-50/50 drop-shadow-lg" src="https://media.licdn.com/dms/image/D4D03AQHgRkudQKs0zw/profile-displayphoto-shrink_800_800/0/1708797569215?e=1715212800&v=beta&t=WV3gadHG49GM-5Qu44BxTv2njtl_He8yIZBkkbZWEpI" />
      <div class="flex flex-col items-center">
        <h2 class="mb-1 mt-5 text-3xl font-thin uppercase tracking-normal text-slate-400">Jan Behrens</h2>
        <hr class="my-2 w-1/3 border-dashed border-gray-200" />
        <h3 class="text-normal -mb-1 font-bold uppercase tracking-wide text-slate-500">Webentwickler</h3>
        <p class="text-base font-thin text-slate-400">aus Karlsruhe</p>
        <hr class="my-2 w-1/3 border-dashed border-gray-200" />
      </div>

    </div>
  
    <!-- Middle -->
    <nav class=" flex flex-1 flex-col justify-start pt-4 space-y-2 overflow-hidden ">
      <RouterLink class="p-2 text-center bg-slate-100 rounded-md" to="/">Home</RouterLink>
      <RouterLink class="p-2 text-center bg-slate-100" to="/about">About</RouterLink>
    </nav>

    <!-- Bottom -->
    <div class="flex justify-center my-3 rounded-full bg-slate-100 mx-auto border border-slate-200">
      <SocialIcons />
    </div>

  </div>
  </div>

  <section class="z-40 mr-3  w-full overflow-scroll max-w-screen-md bg-slate-50/50 shadow-lg">
    <RouterView />
  </section>



  <div class="absolute z-10 hidden h-60 mt-2 w-full overflow-hidden rounded-md bg-slate-500 shadow-lg md:block">
    <img class="h-full w-full object-cover" src="https://media.licdn.com/dms/image/D4D16AQExFt0XrFBodQ/profile-displaybackgroundimage-shrink_350_1400/0/1708875376836?e=1715212800&v=beta&t=bIEqVV4guOi4Bb5l07vY5Zzd9xKwegMY95A8Zn2YFTE" />
  </div>
</main>

</template>
