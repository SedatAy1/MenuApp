# restaurant-menu-app



Bu proje, Vue.js 3, Vue Router, Axios, Pinia ve Tailwind CSS kullanılarak geliştirilmiş basit bir restoran menü uygulamasıdır. Kullanıcılar menüdeki yemekleri listeleyebilir, detaylarını görebilir, favorilerine ekleyebilir ve favori yemeklerini ayrı bir sayfada görüntüleyebilirler.



## Özellikler (Features)

*   Menü öğelerini listeleme
*   Yemek detaylarını görüntüleme
*   Favorilere ekleme/çıkarma
*   Favori yemekleri ayrı sayfada görüntüleme
*   Yemek adına göre arama yapabilme
*   Duyarlı (responsive) tasarım (farklı ekran boyutlarına uyum)
*   Fütüristik temalı tasarım

## Kullanılan Teknolojiler (Technologies Used)

*   [Vue.js 3](https://v3.vuejs.org/)
*   [Vue Router](https://router.vuejs.org/)
*   [Axios](https://axios-http.com/)
*   [Pinia](https://pinia.vuejs.org/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [TheMealDB API](https://www.themealdb.com/api.php)

## Kurulum (Installation)

1.  **Projeyi Klonlayın:**

    ```bash
    git clone <proje_url>
    ```
     (<proje_url> yerine, GitHub deponuzun URL'sini yazın. Örneğin: `git clone https://github.com/kullanici-adiniz/MenuApp.git`)

2.  **Proje Dizine Gidin:**

    ```bash
    cd MenuApp  
    ```

3.  **Bağımlılıkları Yükleyin:**

    ```bash
    npm install
    ```

4.  **Projeyi Çalıştırın:**

    ```bash
    npm run serve
    ```

    Bu komut, projeyi yerel bir geliştirme sunucusunda başlatır. Tarayıcınızda `http://localhost:8080` adresini açarak uygulamayı görüntüleyebilirsiniz (port numarası farklılık gösterebilir, terminaldeki çıktıyı kontrol edin).

## Kullanım (Usage)

*   **Ana Sayfa:** Menüdeki yemeklerin listesini gösterir. Arama çubuğunu kullanarak yemek adına göre arama yapabilirsiniz.
*   **Devamını Oku:** Bir yemeğin detaylarını görmek için "Devamını Oku" butonuna tıklayın.
*   **Favorilere Ekle/Çıkar:** Bir yemeği favorilere eklemek veya çıkarmak için kalp simgesine veya "Favorilere Ekle"/"Favorilerden Çıkar" butonuna tıklayın.
*   **Favorilerim:** Favorilere eklediğiniz yemekleri görmek için üst menüdeki "Favorilerim" bağlantısına tıklayın.

## API Bilgileri

Bu uygulama, yemek verilerini çekmek için TheMealDB API'sini kullanmaktadır: [https://www.themealdb.com/api.php](https://www.themealdb.com/api.php)

Bu API, herkese açık ve ücretsizdir. Herhangi bir API anahtarı (API key) gerektirmez.

## Katkıda Bulunma (Contributing)

Projeye katkıda bulunmak isterseniz, lütfen aşağıdaki adımları izleyin:

1.  Bu depoyu (repository) fork'layın.
2.  Yeni bir branch oluşturun (`git checkout -b yeni-ozellik`).
3.  Değişikliklerinizi yapın ve commit'leyin (`git commit -m "Yeni özellik eklendi"`).
4.  Branch'inizi push'layın (`git push origin yeni-ozellik`).
5.  Bir "Pull Request" (Çekme İsteği) oluşturun.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
