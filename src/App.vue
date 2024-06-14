<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style scoped>
/* CSS untuk mengatur tampilan halaman */
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 30px;
}

/* CSS untuk judul aplikasi */
h1 {
  color: #333;
  margin-bottom: 20px;
}

/* CSS untuk konten halaman */
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -80px; /* Tambahkan margin top untuk memberi ruang di atas konten */
  background-image: url('https://wallpapercave.com/uwp/uwp4286604.jpeg'); /* Ganti dengan URL gambar latar belakang yang baru */
  background-size: cover;
  background-position: center;
  width: 100%; /* Pastikan gambar latar belakang mengisi seluruh area content */
  min-height: 100vh; /* Pastikan content minimal mengisi seluruh tinggi layar */
  color: white; /* Pastikan teks kontras dengan latar belakang */
}

/* CSS untuk tombol */
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

/* CSS untuk input */
input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
}

/* CSS untuk pesan loading */
.loading {
  font-style: italic;
  color: #888;
}

/* CSS untuk konten cuaca */
.weather-info {
  margin-top: 30px;
}

/* CSS untuk konten cuaca */
.weather-info p {
  margin: 10px 0;
}

/* CSS untuk Navbar dengan gambar latar cuaca */
.navbar {
  height: 80px; /* Meningkatkan tinggi navbar */
  display: flex;
  align-items: center;
  padding: 0 30px; /* Meningkatkan padding navbar */
  background-image: url('https://e1.pxfuel.com/desktop-wallpaper/239/131/desktop-wallpaper-animated-rain-windows-10.jpg'); /* Path to your new weather image */
  background-size: cover;
  background-position: center;
  color: white; /* Ensure text is visible */
}

.navbar .navbar-item {
  font-size: 50px; /* Menambah ukuran font navbar item */
  margin: 0 15px; /* Menambah margin antara item */
  padding: 15px 20px; /* Menambah padding dalam item */
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.navbar .navbar-item:hover {
  background-color: rgba(255, 255, 255, 0.2); /* Warna latar belakang saat hover */
}
</style>