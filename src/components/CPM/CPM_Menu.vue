  
<script setup>
// CPM MENU BY JAN BEHRENS
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const startRoutePath = ref('/') 
const maxDepth = ref(0)

function buildMenu(routes, depth = 0) {
  return routes.reduce((acc, route) => {
    if (depth <= maxDepth.value) {
      const menuItem = {
        path: route.path,
        text: route.name
      }

      if (route.children && route.children.length) {
        menuItem.children = buildMenu(route.children, depth + 1)
      }

      acc.push(menuItem)
    }

    return acc
  }, [])
}

const processedMenu = computed(() => {
  const startRoute = router.options.routes.find((r) => r.path === startRoutePath.value)
  if (!startRoute) return []

  let initialRoutes = []

  if (startRoute.children && startRoute.children.length) {
    initialRoutes = [...startRoute.children]
  } else {
    initialRoutes.push(startRoute)
  }

  return buildMenu(initialRoutes)
})
</script>

<template>
  <RouterLink v-for="item in processedMenu" :key="item.path" active-class="main-menu_active" class="main-menu" :to="item.path">

    <div class="w-5 h-5">
      <svg viewBox="0 0 68.24 60.56">
        <path
          d="M67.52 27.55 53.18 2.72A5.48 5.48 0 0 0 48.45 0H19.79a5.48 5.48 0 0 0-4.73 2.72L.73 27.55a5.419 5.419 0 0 0 0 5.45l14.33 24.83a5.467 5.467 0 0 0 4.73 2.73h28.66c1.95 0 3.75-1.04 4.73-2.73L67.51 33c.97-1.68.97-3.76 0-5.45ZM61.68 33 50.26 52.78a5.44 5.44 0 0 1-4.72 2.73H22.7c-1.95 0-3.75-1.04-4.73-2.73L6.56 33a5.419 5.419 0 0 1 0-5.45L17.98 7.77a5.467 5.467 0 0 1 4.73-2.73h22.84a5.44 5.44 0 0 1 4.72 2.73l11.42 19.78c.98 1.69.98 3.77 0 5.45Z"
        />
      </svg>
    </div>

    <span>{{ item.text }}</span>
  </RouterLink>
</template>

<style scoped>
.main-nav { @apply flex flex-1 flex-col justify-start pt-4 items-center space-y-3 overflow-hidden text-sm;}
.main-menu {@apply p-2 text-center transition-all border hover:bg-white border-slate-200 text-slate-500 inline-flex items-center justify-center gap-2 rounded-full mx-7 hover:mx-5 shadow-sm font-light}
.main-menu_active {@apply bg-primary-500 hover:bg-primary-600 border-white border text-primary-100 font-light}
.main-menu svg {@apply fill-slate-200;}
.main-menu_active svg {@apply fill-primary-200;}
</style>
