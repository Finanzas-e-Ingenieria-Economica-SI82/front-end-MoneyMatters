<template>
    <app-bar></app-bar>
    <div class="FrenchMethod" id="app">
		<h1>Plan de Pagos</h1>
		<div class="p-field">
			<label for="importe">Saldo :</label>
            <input class="form-control" v-model="importe" :min="0" :max="1000000" mode="currency" currency="USD" locale="es-US">
			<!--
                <InputNumber v-model="importe" :min="0" :max="1000000" mode="currency" currency="USD" locale="es-US"></InputNumber>
            -->
		</div>
		<div class="p-field">
			<label for="year">Años :</label>
            <input class="form-control" v-model="year" :min="1" :max="50">
            <!--
                <InputNumber v-model="year" :min="1" :max="50"></InputNumber>
            -->
		</div>
		<div class="p-field">
			<label for="interes">Interés :</label>
            <input class="form-control" v-model="interes" :min="0" :max="100" suffix="%">
            <!--
                <InputNumber v-model="interes" :min="0" :max="100" suffix="%"></InputNumber>
            -->
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
.FrenchMethod{
    padding: 30px;
}
.form-control{
    margin: 10px;
    border-radius: 5px;
    height: 30px;
    width: 15%;
}
</style>