<template>
  <div class="popup-overlay">
    <div class="popup-container">
      <h1 class="popup-title">{{ property.name }}</h1>
      <h2 class="popup-subtitle">{{property.numero}}</h2>
      <button class="close-button" @click="closePopup">×</button>
      <div class="content-wrapper">
        <div class="image-text-container">
          <div class="image-container">
            <img :src="property.imageUrl" alt="property image" />
          </div>
          <div class="text-container">
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
              <div class="detail">
                <span class="material-symbols-outlined">kitchen</span>
               {{ property.cocina }}
              </div>
              <div class="detail">
                <span class="material-symbols-outlined">weekend</span>
                 {{ property.sala }}
              </div>
              <div class="detail">
                <span class="material-symbols-outlined">garage</span>
              {{ property.cochera}}
              </div>
            </div>
            <p>{{ property.description }}</p>
          </div>
        </div>
        <div class="button-container">
          <div class="credit-container">
            <router-link to="/french_method">
              <button class="credit-button" @click="goToCredit">Go to Crédito</button>
            </router-link>
          </div>
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
  position: relative;
  max-width: 100%;
  margin-top: 40px; /* Agregar espacio superior */
}

.popup-title {
  font-size: 30px;
  margin-bottom: 20px; /* Aumentar el espacio inferior entre el título y el subtítulo */
}

.popup-subtitle {
  font-size: 18px;
  margin-bottom: 20px; /* Aumentar el espacio inferior entre el subtítulo y el botón de cierre */
  color: #555;
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

.image-text-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px; /* Reducir el espacio entre la imagen y el texto */
  gap: 20px; /* Reducir el espacio entre los elementos */
}


.popup-container img {
  max-width: 100%;
  max-height: 300px;
  margin-bottom: 40px; /* Aumentar el espacio inferior si se desea más separación */
}


.text-container {
  flex: 1 1 auto;
  text-align: center;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.property-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 160px;
}

.detail {
  margin-bottom: 10px;
  text-align: left; 
}


.button-container {
  order: 2;
  align-self: flex-end; /* Alinear el contenedor de botones al inicio */
  margin-top: -170px; /* Reducir el margen superior para acercarlo al texto */
  margin-bottom: 40px; /* Aumentar el margen inferior para separarlo del texto */
}

.credit-button {
  text-align: center;
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
