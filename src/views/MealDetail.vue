<template>
  <div class="container mx-auto p-4">
    <div v-if="loading" class="text-center">Yükleniyor...</div>
    <div v-else-if="error" class="text-red-500 text-center">{{ error }}</div>
    <div v-else class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-3xl font-bold mb-4">{{ meal.strMeal }}</h2>
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-auto rounded-lg mb-4" />
      <p class="text-gray-600 mb-2"><span class="font-semibold">Kategori:</span> {{ meal.strCategory }}</p>
      <p class="text-gray-600 mb-4"><span class="font-semibold">Alan:</span> {{ meal.strArea }}</p>
      <h3 class="text-2xl font-semibold mb-2">Talimatlar:</h3>
      <p class="text-gray-700 mb-4">{{ meal.strInstructions }}</p>
      <h3 class="text-2xl font-semibold mb-2">Malzemeler:</h3>
      <ul class="list-disc pl-5">
        <li v-for="(ingredient, index) in filteredIngredients" :key="index" class="mb-1">
          {{ ingredient }} - {{ meal['strMeasure' + (index + 1)] }}
        </li>
      </ul>
       <button
            @click="toggleFavorite(meal.idMeal)"
            class="mt-4 py-2 px-4 rounded focus:outline-none"
            :class="{
              'bg-red-500 hover:bg-red-700 text-white font-bold': isFavorite(meal.idMeal),
              'bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold': !isFavorite(meal.idMeal),
            }"
          >
            {{ isFavorite(meal.idMeal) ? 'Favorilerden Çıkar' : 'Favorilere Ekle' }}
       </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useFavoritesStore } from '../stores/favorites';
import { mapState, mapActions } from 'pinia';
export default {
  name: 'MealDetail',
  props: ['id'],
  data() {
    return {
      meal: {},
      loading: true,
      error: null,
    };
  },
   computed: {
    ...mapState(useFavoritesStore, ['isFavorite']),
    filteredIngredients() {
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        if (this.meal && this.meal[`strIngredient${i}`]) {
          ingredients.push(this.meal[`strIngredient${i}`]);
        }
      }
      return ingredients;
    },
  },
  mounted() {
    this.fetchMeal();
  },
  methods: {
     ...mapActions(useFavoritesStore, ['toggleFavorite']),
    async fetchMeal() {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`
        );
        this.meal = response.data.meals[0];
      } catch (error) {
        this.error = 'Yemek detayları yüklenirken bir hata oluştu.';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
<style scoped>

</style>