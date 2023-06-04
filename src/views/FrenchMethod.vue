<template>
    <app-bar></app-bar>
    <div class="FrenchMethod" id="app">
		<div v-for="property in properties" :key="property.id" :property="property" @see-more="showPopup(property)">
		
		<h1 class="header">Crédito</h1>
		<div class="p-field">
			<label for="importe">Valor de la Propiedad :  s/.{{ property.price }}  </label>
			<!--
                <InputNumber v-model="importe" :min="0" :max="1000000" mode="currency" currency="USD" locale="es-US"></InputNumber>
            -->
		</div>
		<div class="p-field">
			<label for="porc_inicial">% Cuota Inicial :</label>
            <input class="form-control" v-model="porc_inicial" :min="0" :max="100" suffix="%">
            <!--
                <InputNumber v-model="porc_inicial" :min="0" :max="100" suffix="%"></InputNumber>
            -->
		</div>

		<div class="p-field">
			<label for="year">Plazo :</label>
            <input class="form-control" v-model="year" :min="1" :max="1000">
			<label style="font-weight: bold;">(años)</label>
            <!--
                <InputNumber v-model="year" :min="1" :max="50"></InputNumber>
            -->
		</div>

		<div class="p-field">
			<label for="frecuencia_pago">Frecuencia de Pago:</label>
            <input class="form-control" v-model="frecuencia_pago" :min="1" :max="50">
		</div>

		<div class="p-field">
			<label for="dias_x_año">Días x año:</label>
            <input class="form-control" v-model="dias_x_año" :min="1" :max="50">
		</div>

		<div class="p-field">
			<label for="costes_iniciales">Costes Iniciales:</label>
            <input class="form-control" v-model="costes_iniciales" :min="1" :max="50">
		</div>

		<div class="p-field">
			<label for="portes">Portes:</label>
            <input class="form-control" v-model="portes" :min="1" :max="50">
		</div>

		<div class="p-field">
			<label for="gastos_Admin">Gastos de Administración:</label>
            <input class="form-control" v-model="gastos_Admin" :min="1" :max="50">
		</div>

		<div class="p-field">
			<label for="seguro_desg">% de Seguro de desgravament:</label>
            <input class="form-control" v-model="seguro_desg" :min="7.5" :max="30" suffix="%">
			<label style="font-weight: bold;">(Mensual)</label>
		</div>

		<div class="p-field">
			<label for="seguro_riesgo">% de Seguro de riesgo:</label>
            <input class="form-control" v-model="seguro_riesgo" :min="7.5" :max="30" suffix="%">
			<label style="font-weight: bold;">(Anual)</label>
		</div>

		<div class="p-field">
			<label for="COK"> % dscto. COK anual:</label>
            <input class="form-control" v-model="COK" :min="1" :max="50">
		</div>

		<div class="p-field">
			<label for="TEB"> TEB:</label>
            <input class="form-control" v-model="TEB" :min="1" :max="50">
		</div>

		<!-- Valor predefinido -->
		<div class="p-field">
			<label for="monto_ini">Monto Inicial :</label>
            <input class="form-control" v-model="monto_ini" :min="7.5" :max="30" suffix="%">
			<label style="font-weight: bold;">(7.5% - 30%)</label>
		</div>
		<!-- Valor predefinido -->
		
		
		<div>
			<pv-button style="background: #46A2AE; border-style: none; width: 10%; justify-content: center; font-weight: bold;" label="Calcular" @click="calcular"></pv-button>
		</div>

		<div id="resultado">
			<div v-if="cuotaMensual !== null">
				<div>
					<label for="saldo_inicial"> Saldo a financiar: {{ importe - importe*(porc_inicial/100) }} $</label>
				</div>
				<div>
					<label for="monto_prestamo"> Monto del prestamos: {{ costes_iniciales }} $ </label>
				</div>
				<div>
					<label for="cuotas_x_año"> Cuotas por año: {{ frecuencia_pago/dias_x_año }} </label>
				</div>
				<div>
					<label for="numero_cuotas_total"> Numero total de Cuotas: {{ dias_x_año*cuotas_x_año}}</label>
				</div>
				<div>
					<label for="Seguro_desgrav_per"> % Seguro desgrav. per.: {{ importe * seguro_desg}}</label>
				</div>
				<div>
					<label for="Seguro_riesgo_per"> % Seguro riesgo: {{ importe * seguro_riesgo / cuotas_x_año }}</label>
				</div>
				<!-- <div>Cuota a pagar mensualmente: {{ cuotaMensual.toLocaleString('es-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) }} $</div>
				<div>Capital Inicial: {{ importe.toLocaleString('es-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) }} $</div> -->
			</div>

			<pv-datatable v-if="tabla.length > 0" :value="tabla" :rows="tabla.length">
				<pv-column field="periodo" header="Periodo"></pv-column>
				<pv-column field="saldo" header="Saldo"></pv-column>
				<pv-column field="amortizacion" header="Amortización"></pv-column>
				<pv-column field="intereses" header="Intereses"></pv-column>
				<pv-column field="seguro_desgrv" header=" Seguro Desgravamen"></pv-column>
				<pv-column field="cuota" header="Cuota"></pv-column>
				<pv-column field="seguro_riesgo" header="Seguro de Riesgo"></pv-column>
				<pv-column field="portes" header="Portes"></pv-column>
				<pv-column field="gastos_admin" header="Gastos Administrativos"></pv-column>
				<pv-column field="flujo" header="Flujo"></pv-column>
			</pv-datatable>

			<div style="font-size: 30px; font-family: 'Josefin Sans', sans-serif; padding-top: 30px;" v-if="totalIntereses !== null">Pago total de intereses: {{ totalIntereses.toLocaleString('es-US', {minimumFractionDigits: 2, maximumFractionDigits: 7}) }} $</div>
		</div>
	</div>
	</div>
</template>

<script>
    import AppBar from '../components/AppBar.vue';
	import ApiService from '@/services/ApiService';
    export default{
    name: 'FrenchMethod',
    components: { AppBar },
    data(){
        return{
			properties:[],
            importe: 1000,
			porc_inicial: 2,
			year: 1,
			frecuencia_pago: 1,
			dias_x_año: 360,
			costes_iniciales: 0,
			portes: 0,
			gastos_Admin: 0,
			seguro_desg: 0,
			seguro_riesgo: 0,
			COK: 0,	
			TEB: 0,
			saldo_inicial: 0,
			monto_prestamo: 0,	
			cuotas_x_año: 0,
			numero_cuotas_total: 0,
			Seguro_desgrav_per: 0,
			Seguro_riesgo_per: 0,
			cuotaMensual: null,
			tabla: [],
			totalIntereses: null,	

        }
    },
    methods: {
			calcular() {
				let saldo = parseFloat(this.importe);
				let year = parseInt(this.year);
				let tasa = parseFloat(this.TEB);

				tasa = (tasa / 100);
				const m = (saldo * tasa * (Math.pow((1 + tasa), (year * 12)))) / ((Math.pow((1 + tasa), (year * 12))) - 1);

				this.cuotaMensual = m;

				this.tabla = [];
				let totalInt = 0;
				for (let i = 1; i <= year * 12; i++) {
					totalInt = totalInt + (saldo * tasa);
                    console.log(saldo);
                    console.log(tasa);
                    console.log(saldo*tasa);

                    let copia = (saldo * tasa);
                    saldo = saldo - (m - (saldo * tasa));
                    
					const row = {
						periodo: i,
						intereses: copia.toLocaleString("es-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}),
						amortizacion: (m - copia).toLocaleString("es-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}),
						capitalPendiente: saldo < 0 ? "0" : saldo.toLocaleString("es-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}),
						portes: this.portes,
						gastos_admin: this.gastos_Admin,
						seguro_desgrv: this.seguro_desg * saldo,
						seguro_riesgo: this.seguro_riesgo * saldo,
						
					};
					this.tabla.push(row);
                    //saldo = saldo - (m - (saldo * tasa));
				}
				this.totalIntereses = totalInt;
			}


		},

		created() {
		ApiService.getProperties().then((response) => {
        this.properties = response.data;
				console.log("properties:", this.properties);
			})
			.catch((error) => {
				console.log(error);
			});
	}
		
    }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');
.FrenchMethod{
	margin: 80px;
    padding: 20px;
    box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
}
.form-control{
    margin: 10px;
    border-radius: 5px;
    height: 30px;
    width: 15%;
}
.header{
    font-size: 30px;
    font-family: 'Josefin Sans', sans-serif;
}
</style>