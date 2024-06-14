<template>
  <div class="centered-content">
    <div class="weather-widget">
      <h2 class="widget-title">Cuaca</h2>
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.centered-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url('https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_115897072.jpg') no-repeat center center/cover;
  background-size: 400% 400%;
  animation: backgroundAnimation 15s ease infinite;
  padding: 20px;
}

.weather-widget {
  max-width: 600px;
  width: 100%;
  padding: 30px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  position: relative;
  z-index: 1;
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
  z-index: -1;
}

.weather-widget:hover {
  transform: translateY(-10px);
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.3);
}

.widget-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #fff;
  font-family: 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

.location-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.8);
}

.search-button {
  width: 100%;
  padding: 12px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.search-button:hover {
  background-color: #45a049;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}

.loading-message {
  font-style: italic;
  color: #fff;
  margin-top: 10px;
}

.weather-result {
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.9);
  transition: box-shadow 0.3s ease;
  animation: fadeIn 0.5s ease;
}

.weather-result:hover {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
}

.weather-info {
  margin-bottom: 10px;
  text-align: center;
}

.city-name {
  font-weight: bold;
  color: #fff;
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

.temperature {
  font-size: 4rem;
  color: #fff;
  margin: 10px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

.weather-icon {
  width: 100px;
  height: 100px;
  margin: 10px auto;
  display: block;
}

.weather-description {
  font-style: italic;
  color: #fff;
  font-size: 1.2rem;
}

.additional-info {
  margin-top: 10px;
  font-size: 1.1rem;
  color: #fff;
}

.error-message {
  color: red;
  margin-top: 10px;
  text-align: center;
  font-size: 1.2rem;
}
</style>
