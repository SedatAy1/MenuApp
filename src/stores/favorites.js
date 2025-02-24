import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favoriteMealIds: JSON.parse(localStorage.getItem('favoriteMeals')) || [],
  }),
  getters: {
    isFavorite: (state) => (mealId) => state.favoriteMealIds.includes(mealId),
  },
  actions: {
    addFavorite(mealId) {
      if (!this.favoriteMealIds.includes(mealId)) {
        this.favoriteMealIds.push(mealId);
        this.updateLocalStorage();
      }
    },
    removeFavorite(mealId) {
      this.favoriteMealIds = this.favoriteMealIds.filter((id) => id !== mealId);
      this.updateLocalStorage(); 
    },
    toggleFavorite(mealId) {
      if (this.isFavorite(mealId)) {
        this.removeFavorite(mealId);
      } else {
        this.addFavorite(mealId);
      }
    },
    updateLocalStorage() {
      localStorage.setItem('favoriteMeals', JSON.stringify(this.favoriteMealIds));
    },
  },
});