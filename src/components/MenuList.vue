<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4 text-center">Menü Öğeleri</h2>
    <div class="flex justify-center">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Yemek ara..."
        class="mb-4 px-4 py-2 border rounded-md w-full md:w-1/2 lg:w-1/3"
      />
    </div>
    <div v-if="loading" class="text-center">Yükleniyor...</div>
    <div v-else-if="error" class="text-red-500 text-center">{{ error }}</div>
    <ul v-else class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="meal in filteredMeals" :key="meal.idMeal" class="border rounded-lg shadow-md p-4">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="w-full h-48 object-cover rounded-t-lg"
        />
        <h3 class="text-xl font-semibold mt-2">{{ meal.strMeal }}</h3>
        <p class="text-gray-600">Kategori: {{ meal.strCategory }}</p>
        <p class="text-gray-700 mt-2">{{ truncateText(meal.strInstructions, 150) }}</p>
        <div class="mt-4 flex justify-between items-center">
          <router-link
            :to="'/meal/' + meal.idMeal"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Devamını Oku
          </router-link>
          <button
            @click="toggleFavorite(meal.idMeal)"
            class="py-2 px-4 rounded focus:outline-none"
            :class="{
              'bg-red-500 hover:bg-red-700 text-white font-bold': isFavorite(meal.idMeal),
              'bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold': !isFavorite(meal.idMeal),
            }"
          >
            {{ isFavorite(meal.idMeal) ? 'Favorilerden Çıkar' : 'Favorilere Ekle' }}
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { useFavoritesStore } from '../stores/favorites';
import { mapState, mapActions } from 'pinia';

export default {
  name: 'MenuList',
  data() {
    return {
      meals: [],
      loading: true,
      error: null,
      searchTerm: '',
    };
  },
  mounted() {
    this.fetchMeals();
  },
  computed: {
    ...mapState(useFavoritesStore, ['isFavorite']),
    filteredMeals() {
      return this.meals.filter((meal) =>
        meal.strMeal.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
  },
  methods: {
    ...mapActions(useFavoritesStore, ['toggleFavorite']),
    async fetchMeals() {
      try {
        const response = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/search.php?s='
        );
        this.meals = response.data.meals;
      } catch (error) {
        this.error = 'Menü öğeleri yüklenirken bir hata oluştu.';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    truncateText(text, length) {
      if (text && text.length > length) {
        return text.substring(0, length) + '...';
      }
      return text;
    },
  },
};
</script>

<style scoped>

</style>