// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00FFFF',
        'dark-bg': '#1A1A1A', // Bunu silmeyin, diğer yerlerde kullanılıyor olabilir
        'silver': '#C0C0C0',
        'electric-purple': '#7F00FF',
        'hot-pink': '#FF69B4',
        'soft-pink': '#FDE9F2', // Yeni rengimiz! İstediğiniz adı verebilirsiniz.
      },
      fontFamily: {
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
};