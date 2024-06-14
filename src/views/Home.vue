<template>
  <div class="centered-content">
    <div class="weather-widget">
      <div class="widget-header">
        <h2 class="widget-title">Informasi Cuaca</h2>
      </div>
      <q-input
        filled
        v-model="searchQuery"
        label="Masukkan Nama Kota"
        class="location-input"
      />
      <q-btn @click="searchWeather" class="search-button">Cari</q-btn>
      <div v-if="loading" class="loading-message">Loading data...</div>
      <div v-else-if="weatherData" class="weather-result">
        <div class="weather-info">
          <p class="city-name">{{ weatherData.name }}</p>
          <p class="temperature">{{ weatherData.main.temp }}°C</p>
          <img
            :src="getWeatherIconUrl(weatherData.weather[0].icon)"
            :alt="weatherData.weather[0].description"
            class="weather-icon"
          />
          <p class="weather-description">
            {{ weatherData.weather[0].description }}
          </p>
        </div>
        <div class="additional-info">
          <p>Kelembaban: {{ weatherData.main.humidity }}%</p>
          <p>Kecepatan Angin: {{ weatherData.wind.speed }} m/s</p>
        </div>
      </div>
      <div v-else-if="error" class="error-message">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { QInput, QBtn } from "quasar";

export default {
  components: { QInput, QBtn },
  setup() {
    const searchQuery = ref("");
    const weatherData = ref(null);
    const loading = ref(false);
    const error = ref(null);

    const searchWeather = async () => {
      loading.value = true;
      error.value = null;

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery.value}&appid=bcbc6cc1860d02bd1f4306314c08d7e0&units=metric`
        );
        if (response.data.cod !== 200) {
          throw new Error("City not found");
        }
        weatherData.value = response.data;
      } catch (error) {
        console.error(error);
        error.value = "Gagal mengambil data cuaca atau kota tidak ditemukan";
      } finally {
        loading.value = false;
      }
    };

    const getWeatherIconUrl = (iconCode) => {
      return `https://openweathermap.org/img/wn/${iconCode}.png`;
    };

    return {
      searchQuery,
      weatherData,
      loading,
      error,
      searchWeather,
      getWeatherIconUrl,
    };
  },
};
</script>

<style scoped>
@keyframes backgroundAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.centered-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
  margin-top: 90px;
  background: linear-gradient(270deg, #f0f4f8, #d9e2ec);
  background-size: 400% 400%;
  animation: backgroundAnimation 15s ease infinite;
  padding: 20px;
}

.weather-widget {
  width: 90%;
  max-width: 400px;
  padding: 20px;
  border-radius: 15px;
  background-color: rgba(240, 240, 240, 0.85);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  background-image: url("https://wallpapercave.com/uwp/uwp4243367.jpeg");
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  text-align: center;
  backdrop-filter: blur(5px); /* Add a blur effect to the background image */
}

.weather-widget::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  z-index: 1;
}

.widget-header {
  text-align: center;
  margin-bottom: 15px;
  position: relative;
  z-index: 2;
}

.widget-title {
  font-size: 2rem;
  color: #ffffff;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.location-input {
  width: calc(100% - 20px);
  padding: 12px;
  border: 1px solid #0a0a0a;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
  background-color: rgba(255, 255, 255, 0.8);
  position: relative;
  z-index: 2;
}

.search-button {
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 7px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-top: 10px;
  position: relative;
  z-index: 2;
}

.search-button:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

.loading-message {
  font-style: italic;
  color: #ffffff;
  margin-top: 10px;
  position: relative;
  z-index: 2;
}

.weather-result {
  margin-top: 20px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  background-color: rgba(255, 255, 255, 0.9);
  position: relative;
  z-index: 2;
}

.weather-result:hover {
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.weather-info {
  margin-bottom: 10px;
  text-align: center;
}

.city-name {
  font-weight: bold;
  color: #ffffff;
  font-size: 1.8rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.temperature {
  font-size: 3.5rem;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.weather-icon {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: block;
}

.weather-description {
  font-style: italic;
  color: #ffffff;
}

.additional-info {
  margin-top: 10px;
  color: #ffffff;
}

.additional-info p {
  margin: 5px 0;
}

.error-message {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>
