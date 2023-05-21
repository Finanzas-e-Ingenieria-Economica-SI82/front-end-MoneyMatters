<template>
    <app-bar></app-bar>
    <div class="FrenchMethod" id="app">
		<h1 class="header">Crédito</h1>
		<div class="p-field">
			<label for="importe">Valor de la Propiedad :</label>
            <input class="form-control" v-model="importe" :min="0" :max="1000000" mode="currency" currency="USD" locale="es-US">
			<!--
                <InputNumber v-model="importe" :min="0" :max="1000000" mode="currency" currency="USD" locale="es-US"></InputNumber>
            -->
		</div>
		<div class="p-field">
			<label for="interes">Tasa de Interés :</label>
            <input class="form-control" v-model="interes" :min="0" :max="100" suffix="%">
			<router-link to="/convert_rate">
				<pv-button style="background: #46a2aea1; border-style: none; " >Convert Rate</pv-button>
			</router-link>
            <!--
                <InputNumber v-model="interes" :min="0" :max="100" suffix="%"></InputNumber>
            -->
		</div>
		<div class="p-field">
			<label for="monto_ini">Monto Inicial :</label>
            <input class="form-control" v-model="monto_ini" :min="7.5" :max="30" suffix="%">
			<label style="font-weight: bold;">(7.5% - 30%)</label>
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
			<label for="periodo_gracia">Periodo de Gracia:</label>
            <input class="form-control" v-model="periodo_gracia" :min="1" :max="50">
		</div>
		<div>
			<pv-button style="background: #46A2AE; border-style: none; width: 10%; justify-content: center; font-weight: bold;" label="Calcular" @click="calcular"></pv-button>
		</div>

		<div id="resultado">
			<div v-if="cuotaMensual !== null">
				<div>Capital Inicial: {{ importe.toLocaleString('es-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) }} $</div>
				<div>Cuota a pagar mensualmente: {{ cuotaMensual.toLocaleString('es-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) }} $</div>
			</div>

			<pv-datatable v-if="tabla.length > 0" :value="tabla" :rows="tabla.length">
				<pv-column field="mes" header="Mes"></pv-column>
				<pv-column field="intereses" header="Intereses"></pv-column>
				<pv-column field="amortizacion" header="Amortización"></pv-column>
				<pv-column field="capitalPendiente" header="Saldo Final"></pv-column>
			</pv-datatable>

			<div style="font-size: 30px; font-family: 'Josefin Sans', sans-serif; padding-top: 30px;" v-if="totalIntereses !== null">Pago total de intereses: {{ totalIntereses.toLocaleString('es-US', {minimumFractionDigits: 2, maximumFractionDigits: 7}) }} $</div>
		</div>
	</div>
</template>

<script>
    import AppBar from '../components/AppBar.vue';
    export default{
    name: 'FrenchMethod',
    components: { AppBar },
    data(){
        return{
            importe: 1000,
			year: 1,
			interes: 2,
			cuotaMensual: null,
			tabla: [],
			totalIntereses: null
        }
    },
    methods: {
			calcular() {
				let saldo = parseFloat(this.importe);
				let year = parseInt(this.year);
				let tasa = parseFloat(this.interes);

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
						mes: i,
						intereses: copia.toLocaleString("es-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}),
						amortizacion: (m - copia).toLocaleString("es-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}),
						capitalPendiente: saldo < 0 ? "0" : saldo.toLocaleString("es-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})
					};
					this.tabla.push(row);
                    //saldo = saldo - (m - (saldo * tasa));
				}
				this.totalIntereses = totalInt;
			}
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