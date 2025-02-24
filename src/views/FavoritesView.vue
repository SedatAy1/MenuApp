<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-extrabold text-gray-800 mb-6">Favori Yemeklerim</h2>
    <div v-if="loading" class="text-center text-gray-600">Yükleniyor...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else-if="favoriteMeals.length === 0" class="text-center text-gray-600">
      Henüz favori yemeğiniz yok.
    </div>
    <ul v-else class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <li
        v-for="meal in favoriteMeals"
        :key="meal.idMeal"
        class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-48 object-cover" />
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800">{{ meal.strMeal }}</h3>
          <p class="text-gray-600 mt-1">Kategori: {{ meal.strCategory }}</p>
          <p class="text-gray-700 mt-4">{{ truncateText(meal.strInstructions, 100) }}</p>
          <div class="mt-6 flex justify-between items-center">
            <router-link
              :to="'/meal/' + meal.idMeal"
              class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            >
              Devamını Oku
            </router-link>
            <button
              @click="toggleFavorite(meal.idMeal)"
              class="py-2 px-3 rounded-full focus:outline-none inline-flex items-center"
              :class="{
                'bg-red-600 hover:bg-red-700 text-white': isFavorite(meal.idMeal),
                'bg-gray-200 hover:bg-gray-300 text-gray-700': !isFavorite(meal.idMeal),
              }"
            >
               <svg v-if="isFavorite(meal.idMeal)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.75 3c1.913 0 3.72.947 4.842 2.468a.75.75 0 010 .564C13.73 4.038 15.537 3 17.25 3 20.286 3 22.75 5.322 22.75 8.25c0 3.924-2.438 7.11-5.348 9.488a25.182 25.182 0 01-4.244 3.17 15.247 15.247 0 01-.383.218l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <span class="ml-1">{{ isFavorite(meal.idMeal) ? 'Favorilerden Çıkar' : 'Favorilere Ekle' }}</span>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useFavoritesStore } from '../stores/favorites';
import { mapState, mapActions } from 'pinia';
import axios from 'axios';

export default {
  name: 'FavoritesView',
  data() {
    return {
      favoriteMeals: [],
      loading: true,
      error: null,
    };
  },
  computed: {
    ...mapState(useFavoritesStore, ['isFavorite','favoriteMealIds']),

  },
  methods:{
    ...mapActions(useFavoritesStore, ['toggleFavorite']),
    truncateText(text, length) {
      if (text && text.length > length) {
        return text.substring(0, length) + '...';
      }
      return text;
    },
     async fetchFavoriteMeals() {
      this.loading = true;
      this.error = null;
      this.favoriteMeals = []; 
      try {
    
        for (const mealId of this.favoriteMealIds) {
          const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
          );
        
          if (response.data.meals && response.data.meals.length > 0) {
            this.favoriteMeals.push(response.data.meals[0]);
          }
        }
      } catch (error) {
        this.error = 'Favori yemekler yüklenirken bir hata oluştu.';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },

  mounted() {
     this.fetchFavoriteMeals()
  },
    watch: {
    favoriteMealIds() {
      
      this.fetchFavoriteMeals();
    },
  },
};
</script>