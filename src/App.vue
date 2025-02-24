<template>
  <div id="app" class="font-rajdhani bg-soft-pink min-h-screen">
   <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col items-center mb-8">
        <h1 class="text-4xl font-extrabold text-gray-800 text-center">Restoran Menüsü</h1>
         <nav class="mt-4">
            <router-link to="/" class="mx-4 text-electric-purple hover:underline">Ana Sayfa</router-link>
            <router-link to="/favorites" class="mx-4 text-electric-purple hover:underline">Favorilerim</router-link>
         </nav>
        </div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>