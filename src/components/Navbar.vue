<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">WEATHER</router-link>
    </div>
    <div class="task-links">
      <div class="dropdown" @click="toggleDropdown">
        <div class="navbar-item">
          TUGAS PROJETC RAFID ▼
        </div>
        <div class="dropdown-menu" :class="{ 'is-active': isDropdownActive }">
          <a href="https://rafid-projetc-cv.web.app/" class="navbar-item" target="_blank">TUGAS 1</a>
          <a href="https://rafid-projetc-cv.web.app/" class="navbar-item" target="_blank">TUGAS 2</a>
          <a href="https://mrafid-tugas3-pbk-223510879.web.app/" class="navbar-item" target="_blank">TUGAS 3</a>
          <a href="https://tugas4-p4-prak-pbk.vercel.app/" class="navbar-item" target="_blank">TUGAS 4</a>
          <a href="https://tugas5-prak-pbk.vercel.app/" class="navbar-item" target="_blank">TUGAS 5</a>
          <a href="https://tugas-6-prak-pbk-kohl.vercel.app/" class="navbar-item" target="_blank">TUGAS 6</a>
          <a href="https://tugas7-prak-pbk.vercel.app/" class="navbar-item" target="_blank">TUGAS 7</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isDropdownActive: false
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownActive = !this.isDropdownActive;
    }
  }
};
</script>

<style scoped>
/* Navbar Styles */
.navbar {
  background: linear-gradient(45deg, #2c3e50, #34495e);
  color: #fff;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.navbar:hover {
  background: linear-gradient(45deg, #34495e, #2c3e50);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-item {
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background 0.3s, color 0.3s, transform 0.3s;
  font-size: 18px;
  display: flex;
  align-items: center;
  position: relative;
}

.navbar-item:hover {
  background-color: #1abc9c;
  color: #fff;
  transform: scale(1.05);
}

.task-links {
  display: flex;
  align-items: center;
}

/* Dropdown Styles */
.dropdown {
  position: relative;
  cursor: pointer;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(45deg, #2c3e50, #34495e);
  border-radius: 10px;
  padding: 10px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 220px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.dropdown-menu.is-active {
  display: block;
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-50%) translateY(10px);
}

.dropdown-menu .navbar-item {
  display: block;
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  transition: background 0.3s, transform 0.3s;
}

.dropdown-menu .navbar-item:hover {
  background-color: #1abc9c;
  transform: scale(1.05);
}

.navbar-item.active {
  background-color: #1abc9c;
}

/* Additional Styling for Better Aesthetics */
.navbar::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3px;
  background: linear-gradient(to right, #1abc9c, #3498db);
  transition: height 0.3s ease;
}

.navbar:hover::after {
  height: 5px;
}

.navbar-item::after {
  content: '';
  display: block;
  width: 0;
  height: 3px;
  background: #1abc9c;
  transition: width 0.3s ease;
  position: absolute;
  bottom: -3px;
  left: 0;
  right: 0;
}

.navbar-item:hover::after {
  width: 100%;
}

.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent #34495e transparent;
}

/* Enhanced Hover and Focus States */
.navbar-item:focus,
.dropdown-menu .navbar-item:focus {
  outline: none;
  background-color: #16a085;
  color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.navbar-item:active,
.dropdown-menu .navbar-item:active {
  background-color: #1abc9c;
  color: #fff;
}
</style>
