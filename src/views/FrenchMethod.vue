<template>
    <app-bar></app-bar>
    <div class="FrenchMethod" id="app">
		<!-- <div v-for="property in properties" :key="property.id" :property="property" @goToCredit="showCredit(property)"> -->
		
		<h1 class="header">Crédito</h1>
		<!-- <div class="p-field">
			<label for="importe">Valor de la Propiedad :  s/.{{ property.price }}  </label>
		</div> -->

		<div class="p-field">
			<label for="importe">Valor de la propiedad (S/.):</label>
            <input class="form-control" v-model="importe" :min="0" :max="100">
            <!--
                <InputNumber v-model="porc_inicial" :min="0" :max="100" suffix="%"></InputNumber>
            -->
		</div>

		<div class="p-field">
			<label for="porc_inicial">% Cuota Inicial :</label>
            <input class="form-control" v-model="porc_inicial" :min="0" :max="100" suffix="%">
			<label style="font-weight: bold;">(7.5% - 30%)</label>
            <!--
                <InputNumber v-model="porc_inicial" :min="0" :max="100" suffix="%"></InputNumber>
            -->
		</div>

		<div class="p-field">
			<label for="TEA"> TEA:</label>
            <input class="form-control" v-model="TEA" :min="1" :max="50" suffix="%">
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
			<label style="font-weight: bold;">(meses)</label>
		</div>

		<div class="p-field">
			<label for="plazo_gracia">Plazo Gracia:</label>
            <input class="form-control" v-model="plazo_gracia" :min="1" :max="50">
			<label style="font-weight: bold;">(meses)</label>
		</div>

		<div class="p-field">
			<label for="coste_notarial">Coste notarial:</label>
            <input class="form-control" v-model="coste_notarial" :min="1" :max="50">
		</div>

		<div class="p-field">
			<label for="coste_registro">Coste de registro:</label>
            <input class="form-control" v-model="coste_registro" :min="1" :max="50">
		</div>

		<div class="p-field">
			<label for="comision">Comisión de estudio:</label>
            <input class="form-control" v-model="comision" :min="1" :max="50">
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
			<label style="font-weight: bold;">(Anual)</label>
		</div>

		<div class="p-field">
			<label for="seguro_riesgo">% de Seguro de riesgo:</label>
            <input class="form-control" v-model="seguro_riesgo" :min="7.5" :max="30" suffix="%">
			<label style="font-weight: bold;">(Anual)</label>
		</div>

		<div class="p-field">
			<label for="COK"> % dscto. COK:</label>
            <input class="form-control" v-model="COK" :min="1" :max="50" suffix="%">
			<label style="font-weight: bold;">(Anual)</label>
		</div>
		
		
		<div>
			<pv-button style="background: #46A2AE; border-style: none; width: 10%; justify-content: center; font-weight: bold;" label="Calcular" @click="calcular"></pv-button>
		</div>

		<div id="resultado">
			<div v-if="cuotaMensual !== null">
				<div>
					<label for="TEB"> TEB: {{ TEB}}</label>
				</div>
				<div>
					<label for="numero_cuotas_total"> Numero total de Cuotas: {{ year*12}}</label>
				</div>
				<div>
					<label for="Seguro_desgrav_per"> % Seguro desgrav. per.: {{ Seguro_desgrav_per}}</label>
				</div>
				<div>
					<label for="Seguro_riesgo_per"> % Seguro riesgo: {{Seguro_riesgo_per }}</label>
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
	<!-- </div> -->

</template>

<script>
    import AppBar from '../components/AppBar.vue';
	import ApiService from '@/services/ApiService';
    export default{
    name: 'FrenchMethod',
    components: { AppBar },
    data(){
        return{
			propertie: null,
            importe: 200000,
			porc_inicial: 12,
			year: 6,
			frecuencia_pago: 1,
			plazo_gracia: 0,
			coste_notarial: 250,
			coste_registro:150,
			comision:100,
			portes:120,
			gastos_Admin: 130,
			seguro_desg: 0.40,
			seguro_riesgo: 0.30,
			COK: 35,	
			TEA: 0.16,
			TEB: 0.0,
			monto_prestamo: 0,	
			cuotas_x_año: 0,
			numero_cuotas_total: 0,
			Seguro_desgrav_per: 0.0,
			Seguro_riesgo_per: 0.0,
			cuotaMensual: null,
			cuota:0.0,
			tabla: [],
			totalIntereses: null,	

        }
    },
    methods: {
		calcular() {
			let TEB = (Math.pow(1 + this.TEA, 1/12) - 1)/100 ;
			let saldo = this.importe+ this.porc_inicial*this.importe/100 + this.coste_notarial + this.coste_registro + this.comision;
			let year = parseInt(this.year);
			this.Seguro_desgrav_per = (this.seguro_desg/12)/100;
			this.Seguro_riesgo_per = (this.seguro_riesgo/12)/100;

			//TEB = (TEB / 100);
				//const m = (saldo * TEB * (Math.pow((1 + TEB), (year * 12)))) / ((Math.pow((1 + TEB), (year * 12))) - 1);
			this.cuotaMensual = (saldo*(TEB+this.Seguro_desgrav_per))/(1-Math.pow(1+(TEB+this.Seguro_desgrav_per), (-72)));
				//this.cuotaMensual = m;

				this.tabla = [];
				let totalInt = 0;

				for (let i = 1; i <= year * 12; i++) {
					
					//totalInt = totalInt + (saldo * TEB);
					//this.amortizacion=this.intereses + this.seguro_desg + this.cuotaMensual;
                    console.log(saldo);
                    console.log(TEB);
                    console.log(saldo*TEB);
					console.log(this.amortizacion);
                    //let copia = (saldo * tasa);
                    //saldo = saldo - (m - (saldo * TEB));
                    
					const row = {
						periodo: i, 
						saldo: this.periodo==1 ? (saldo).toLocaleString("es-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}): (saldo - this.amortizacion).toLocaleString("es-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}),
						intereses: (TEB * saldo).toLocaleString("es-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}),
						cuota: this.cuotaMensual.toLocaleString("es-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}),
						portes: this.portes,
						gastos_admin: this.gastos_Admin,
						seguro_desgrv: (this.Seguro_desgrav_per * saldo).toLocaleString("es-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}),
						seguro_riesgo: (this.Seguro_riesgo_per * saldo).toLocaleString("es-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}),
						flujo: (this.cuotaMensual + this.portes + this.gastos_Admin+this.Seguro_riesgo_per ).toLocaleString("es-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}),
						amortizacion: ((TEB * saldo)+this.cuotaMensual+(this.Seguro_desgrav_per * saldo)).toLocaleString("es-US", {minimumFractionDigits: 2, maximumFractionDigits: 2}),
					};
					this.tabla.push(row);
                    //saldo = saldo - (m - (saldo * tasa));
				}
				this.totalIntereses = totalInt;
			}


		},

		created() {
		ApiService.getPropertiesById(this.property).then((response) => {
        this.property = response.data;
				console.log("property:", this.property);
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