<template>
  <div class="popup-overlay">
    <div class="popup-container">
      <button class="close-button" @click="closePopup">×</button>
      <div class="content-wrapper">
        <div class="image-container">
          <img :src="property.imageUrl" alt="property image" />
        </div>
        <div class="text-container">
          <h2>{{ property.departamento }}</h2>
          <p>{{ property.description }}</p>
          <div class="property-details">
            <div class="detail">
              <span class="material-symbols-outlined">bed</span>
              {{ property.numDormitorios }} Dormitorios
            </div>
            <div class="detail">
              <span class="material-symbols-outlined">design_services</span>
              {{ property.dimension }} m2
            </div>
            <div class="detail">
              <span class="material-symbols-outlined">payments</span>
              S/. {{ property.price }}
            </div>
          </div>
        </div>
        <div class="button-container">
          <router-link to="/french_method">
          <button class="credit-button" @click="goToCredit">Go to Crédito</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupComponent',
  props: {
    property: Object,
  },
  methods: {
    closePopup() {
      this.$emit('close-popup');
    },
    goToCredit() {
      // Implement your logic to navigate to the credit page
    },
  },
};
</script>

<style>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-container {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  order: 1;
}

.popup-container img {
  width: 500px;
  height: auto;
  margin-bottom: 20px;
}

.text-container {
  order: 2;
  margin-bottom: 20px;
}

.property-details {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.detail {
  margin: 0 10px;
}

.button-container {
  order: 3;
}

.popup-container button {
  background: #46a2ae;
  border-style: none;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
}
</style>
