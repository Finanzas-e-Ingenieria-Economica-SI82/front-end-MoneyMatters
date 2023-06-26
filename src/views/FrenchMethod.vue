<template>
	<app-bar></app-bar>

	<div class="FrenchMethod" id="app">
		<div class="card-header">Crédito</div>
		<p style="font-weight: bold;">... del préstamo</p>
		<div class="p-field">
			<label for="importe">Valor de la propiedad: </label>
			<input class="form-control" v-model="importe" type="number" :min="0">
			<select class="input-gropup-text" style="width: 50px; height: 25px; border-radius: 5px;" @change="convertirMoneda">
				<option value="0">S/</option>
				<option value="1">$</option>
			</select>
		</div>

		<div class="p-field">
			<label for="porc_inicial">% Cuota Inicial :</label>
			<input class="form-control" v-model="porc_inicial" type="number" :min="7.5" :max="30" suffix="%">
			<label style="font-weight: bold;">(7.5% - 30%)</label>
		</div>

		<div class="p-field">
			<label for="TEA"> Tasa:</label>
			<input class="form-control" v-model="TEA" type="number" :min="1" :max="50" suffix="%">
			<router-link to="/convert_rate">
				<pv-button
					style="background: #46A2AE; border-style: none; width: 7%; justify-content: center; font-weight: bold;  margin-left: 15px;"
					label="Convertir"></pv-button>
			</router-link>
		</div>

		<div class="p-field">
			<label for="year">Plazo :</label>
			<input class="form-control" v-model="year" type="number" :min="1" :max="100">
			<label style="font-weight: bold;">(años)</label>
		</div>

		<div class="p-field">
			<label for="frecuencia_pago">Frecuencia de Pago:</label>
			<input class="form-control" v-model="frecuencia_pago" type="number" :min="1" :max="50">
			<label style="font-weight: bold;">(meses)</label>
		</div>

		<div class="p-field">
			<label for="plazo_gracia">Plazo Gracia:</label>
			<input class="form-control" v-model="plazo_gracia" type="number" :min="1" :max="50">
			<label style="font-weight: bold;">(meses) &nbsp; </label>

			<select id="plazo_gracia_select" class="input-gropup-text" @change="cambio()"
				style="width: 100px; height: 25px; border-radius: 5px;">
				<option selected value="0">TOTAL</option>
				<option value="1">PARCIAL</option>
			</select>
		</div>

		<p style="font-weight: bold;">... de los costes/gastos iniciales</p>
		<div class="p-field">
			<label for="coste_notarial">Coste notarial:</label>
			<input class="form-control" v-model="coste_notarial" type="number" :min="1" :max="10000">
		</div>

		<div class="p-field">
			<label for="coste_registro">Coste de registro:</label>
			<input class="form-control" v-model="coste_registro" type="number" :min="1" :max="10000">
		</div>

		<div class="p-field">
			<label for="comision">Comisión de estudio:</label>
			<input class="form-control" v-model="comision" type="number" :min="1" :max="10000">
		</div>

		<p style="font-weight: bold;">... de los costes/gastos periodicos</p>
		<div class="p-field">
			<label for="portes">Portes:</label>
			<input class="form-control" v-model="portes" type="number" :min="1" :max="10000">
		</div>

		<div class="p-field">
			<label for="gastos_Admin">Gastos de Administración:</label>
			<input class="form-control" v-model="gastos_Admin" type="number" :min="1" :max="10000">
		</div>

		<div class="p-field">
			<label for="seguro_desg">% de Seguro de desgravament:</label>
			<input class="form-control" v-model="seguro_desg" type="number" :min="0" :max="100" suffix="%">
			<label style="font-weight: bold;">(Anual)</label>
		</div>

		<div class="p-field">
			<label for="seguro_riesgo">% de Seguro de riesgo:</label>
			<input class="form-control" v-model="seguro_riesgo" type="number" :min="0" :max="100" suffix="%">
			<label style="font-weight: bold;">(Anual)</label>
		</div>

		<p style="font-weight: bold;">... del costo de oportunidad</p>
		<div class="p-field">
			<label for="COK"> % dscto. COK:</label>
			<input class="form-control" v-model="COK" type="number" :min="1" :max="50" suffix="%">
			<label style="font-weight: bold;">(Anual)</label>
		</div>


		<div>
			<pv-button
				style="background: #46A2AE; border-style: none; width: 10%; justify-content: center; font-weight: bold;  margin-left: 15px;"
				label="Calcular" @click="calcular"></pv-button>
			<pv-button
				style="background: #46A2AE; border-style: none; width: 10%; justify-content: center; font-weight: bold; margin-left: 15px; "
				label="Descargar" @click="descargarExcel">
			</pv-button>
			<pv-button
				style="background: #46A2AE; border-style: none; width: 10%; justify-content: center; font-weight: bold;  margin-left: 15px;"
				label="Limpiar" @click="reiniciarValores"></pv-button>
		</div>
		<br>
		<div id="resultado">
			<div v-if="cuotaMensual !== null">
				<div>
					<label for="TEM"> TEM: {{ ((Math.pow(1 + this.TEA, 1 / 12) - 1) * 100).toLocaleString("es-US",
						{ minimumFractionDigits: 2, maximumFractionDigits: 2 }) }} % </label>
				</div>
				<div>
					<label for="numero_cuotas_total"> Numero total de Cuotas: {{ year * 12 }}</label>
				</div>
				<div>
					<label for="Seguro_desgrav_per"> % Seguro desgrav. per.: {{ Seguro_desgrav_per.toLocaleString("es-US",
						{ minimumFractionDigits: 2, maximumFractionDigits: 2 }) }} % </label>
				</div>
				<div>
					<label for="Seguro_riesgo_per"> % Seguro riesgo: {{ Seguro_riesgo_per.toLocaleString("es-US",
						{ minimumFractionDigits: 2, maximumFractionDigits: 2 }) }} % </label>
				</div>
				<div>
					<label for="COK_MES"> % dscto. COK(mes): {{ ((Math.pow(1 + (this.COK / 100), 1 / 12) -
						1) * 100).toLocaleString("es-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }} %
					</label>
				</div>
				<div>
					<label for="VAN"> VAN : {{ VAN.toLocaleString("es-US", {
						minimumFractionDigits: 2, maximumFractionDigits:
							2
					}) }} </label>
				</div>
				<div>
					<label for="TIR"> TIR : {{ TIR.toLocaleString("es-US", {
						minimumFractionDigits: 2, maximumFractionDigits:
							2
					}) }} % </label>
				</div>
				<div>
					<label for="Bono"> Se aplicó el bono: {{ Bono() }} </label>
				</div>
			</div>
			<br>
			<pv-datatable v-if="tabla.length > 0" :value="tabla" :rows="tabla.length">
				<pv-column field="periodo" header="Periodo"></pv-column>
				<pv-column field="saldo" header="Saldo"></pv-column>
				<pv-column field="amortizacion" header="Amortización"></pv-column>
				<pv-column field="intereses" header="Intereses"></pv-column>
				<pv-column field="seguro_desgrv" header=" Seguro Desgravamen"></pv-column>
				<pv-column field="cuota" header="Cuota"></pv-column>
				<pv-column field="seguro_riesg" header="Seguro de Riesgo"></pv-column>
				<pv-column field="portes" header="Portes"></pv-column>
				<pv-column field="gastos_admin" header="Gastos Administrativos"></pv-column>
				<pv-column field="flujo" header="Flujo"></pv-column>
				<!-- <pv-column field="flujo_actuales" header="Flujos Actuales"></pv-column> -->
			</pv-datatable>
		</div>
	</div>
</template>

<script>
import AppBar from '../components/AppBar.vue';
import { utils, writeFile } from 'xlsx';
import { irr } from 'financial'
import ApiService from '@/services/ApiService';

export default {
	name: 'FrenchMethod',
	components: { AppBar },
	props: ['propertyId'],
	data() {
		return {
			property: {},
			importe: 0,
			porc_inicial: 0,
			year: 0,
			frecuencia_pago: 0,
			plazo_gracia: 0,
			coste_notarial: 0,
			coste_registro: 0,
			comision: 0,
			portes: 120,
			gastos_Admin: 130,
			seguro_desg: 0.0,
			seguro_riesgo: 0.0,
			COK: 0,
			COK_MES: 0.0,
			TEA: 0.0,
			TEM: 0.0,
			monto_prestamo: 0,
			cuotas_x_año: 0,
			numero_cuotas_total: 0,
			Seguro_desgrav_per: 0.0,
			Seguro_riesgo_per: 0.0,
			suma_flujo_actuales: 0,
			totalSUMA: 0,
			VAN: 0,
			TIR: 0,
			cuotaMensual: 0,
			cuota: 0.0,
			tabla: [],
			totalIntereses: null,
			tipoPlazoGracia: null,
			tipoMoneda: 0 || 1,
			bono: 0,
		}
	},

	created() {
		const propertyId = this.$route.query.propertyId;
		console.log('Property ID:', propertyId); // Verificar el valor de propertyId en la consola

		ApiService.getPropertiesById(propertyId)
			.then(response => {
				this.property = response.data;
				this.importe = this.property.price;
			})
			.catch(error => {
				console.error('Error al cargar los datos del inmueble:', error);
			});
	},
	methods: {

		reiniciarValores() {
			window.location.reload();
			this.porc_inicial = 0;
			this.year = 0;
			this.frecuencia_pago = 0;
			this.plazo_gracia = 0;
			this.coste_notarial = 0;
			this.coste_registro = 0;
			this.comision = 0;
			this.seguro_desg = 0;
			this.seguro_riesgo = 0;
			this.COK = 0;
			this.COK_MES = 0;
			this.TEA = 0;
			this.TEM = 0;
			this.monto_prestamo = 0;
			this.cuotas_x_año = 0;
			this.numero_cuotas_total = 0;
			this.Seguro_desgrav_per = 0;
			this.Seguro_riesgo_per = 0;
			this.suma_flujo_actuales = 0;
			this.totalSUMA = 0;
			this.VAN = 0;
			this.TIR = 0;
			this.cuotaMensual = 0;
			this.cuota = 0;
			this.bono = 0;
			this.tabla = [];
		},
		convertirMoneda() {
					const tipoCambio = 3.63; // Cambia este valor por el tipo de cambio actual

					if (this.tipoMoneda === 0) {
					// Convertir de soles a dólares

					this.importe = this.importe * tipoCambio; this.tipoMoneda = 1;
					this.coste_notarial = this.coste_notarial * tipoCambio; this.tipoMoneda = 1;
					this.coste_registro = this.coste_registro * tipoCambio; this.tipoMoneda = 1;
					this.comision = this.comision * tipoCambio; this.tipoMoneda = 1;
					this.portes = (this.portes * tipoCambio); this.tipoMoneda = 1;
					this.gastos_Admin = this.gastos_Admin * tipoCambio; this.tipoMoneda = 1;

			} else {
				this.importe = this.importe / tipoCambio;  this.tipoMoneda = 0;
					this.coste_notarial = this.coste_notarial / tipoCambio; this.tipoMoneda = 0;
					this.coste_registro = this.coste_registro / tipoCambio; this.tipoMoneda = 0;
					this.comision = this.comision / tipoCambio; this.tipoMoneda = 0;
					this.portes = this.portes / tipoCambio; this.tipoMoneda = 0;
					this.gastos_Admin = this.gastos_Admin / tipoCambio; this.tipoMoneda = 0;
			}
		},
		cambio() {
			this.tabla = [];
		},

		calcular() {
			let tipoPlazoGracia = document.getElementById('plazo_gracia_select').value;
			let bono = 0;

			if(this.importe >= 65200 && this.importe <= 93100){
				bono = 25700
			}else
			if(this.importe >= 93100 && this.importe <= 139400){
				bono = 21400
			}else
			if(this.importe >= 139400 && this.importe <= 232200){
				bono = 19600
			}else
			if(this.importe >= 232200 && this.importe <= 343900){
				bono = 10800
			}
			if(this.importe > 343900){
				bono = 343900
			}
			this.bono = bono;
			
			let TEM = (Math.pow(1 + this.TEA, 1 / 12) - 1);
			let saldoi = this.importe - ((this.importe * (this.porc_inicial / 100)) + bono) + this.coste_notarial + this.coste_registro + this.comision;
			let saldo = this.importe - ((this.importe * (this.porc_inicial / 100)) + bono) + this.coste_notarial + this.coste_registro + this.comision;
			let year = parseInt(this.year);
			let COK_MES = (Math.pow(1 + (this.COK / 100), 1 / 12) - 1);
			this.Seguro_desgrav_per = (this.seguro_desg / 12);
			this.Seguro_riesgo_per = (this.seguro_riesgo / 12);
			console.log(this.Seguro_riesgo_per);
			console.log(this.coste_notarial + this.coste_registro + this.comision);
			console.log(this.coste_notarial + this.importe);
			let flujos = [];
			console.log(flujos);

			let totalInt = 0;
			let suma_flujo_actuales = 0;
			let prevSaldo = saldoi;

			for (let i = 0; i <= year * 12; i++) {
				if (i == this.plazo_gracia) {
					var cuotaCopia = saldo;
				}
				console.log(this.porc_inicial);
				console.log(this.importe);
				console.log(this.coste_notarial);
				console.log(this.coste_registro);
				console.log(this.comision);
				console.log(this.portes);
				totalInt = totalInt + (saldo * TEM);
				console.log(this.importe);
				console.log(saldoi);
				console.log(COK_MES)
				console.log(cuotaCopia);
				console.log(this.intereses);
				console.log(TEM * 100);
				console.log(this.seguro_desgrv);
				console.log(this.seguro_riesg);

				if (i <= this.plazo_gracia) {
					if (tipoPlazoGracia == '0') {
						this.cuotaMensual = ((this.Seguro_desgrav_per / 100) * prevSaldo);
						this.amortizacion = 0;
					} else if (tipoPlazoGracia == '1') {
						this.cuotaMensual = this.intereses + this.seguro_desgrv;
						this.amortizacion = 0;
					}
				} else {
					this.cuotaMensual = (cuotaCopia * (TEM + (this.Seguro_desgrav_per / 100))) / (1 - Math.pow((1 + (TEM + (this.Seguro_desgrav_per / 100))), -60))
					this.amortizacion = this.cuotaMensual - this.seguro_desgrv - this.intereses;
				} if (i > this.plazo_gracia) {
					saldo = prevSaldo - this.amortizacion;
				}

				this.flujo = -(this.cuotaMensual + this.portes + this.gastos_Admin + this.seguro_riesg);

				this.flujo_actuales = (this.flujo / (Math.pow(1 + COK_MES, i)));

				if (this.flujo_actuales !== 0 && i >= 1) {
					suma_flujo_actuales += this.flujo_actuales;
				}
				this.totalSUMA = suma_flujo_actuales;

				this.VAN = (this.totalSUMA + saldoi);

				flujos.push(this.flujo.toFixed(2));
				console.log(flujos);

				const row = {
					periodo: i,
					saldo: i == 0 ? (saldoi).toLocaleString("es-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : (saldo).toLocaleString("es-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
					intereses: i == 0 ? 0 : (this.intereses).toLocaleString("es-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
					cuota: i == 0 ? 0 : this.cuotaMensual.toLocaleString("es-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
					portes: i == 0 ? 0 : this.portes,
					gastos_admin: i == 0 ? 0 : this.gastos_Admin,
					seguro_desgrv: i == 0 ? 0 : (this.seguro_desgrv).toLocaleString("es-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
					seguro_riesg: i == 0 ? 0 : (this.seguro_riesg).toLocaleString("es-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
					flujo: i == 0 ? saldo.toLocaleString("es-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : this.flujo.toLocaleString("es-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
					flujo_actuales: i == 0 ? 0 : (this.flujo_actuales).toLocaleString("es-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
					amortizacion: this.amortizacion.toLocaleString("es-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
				};

				this.tabla.push(row);

				prevSaldo = saldo;
				this.intereses = (prevSaldo) * (TEM);
				this.seguro_desgrv = (this.Seguro_desgrav_per / 100) * prevSaldo;
				this.seguro_riesg = (this.Seguro_riesgo_per / 100) * this.importe;
				if (i <= this.plazo_gracia) {
					if (tipoPlazoGracia == '1') {
						saldo = saldoi;
					} else if (tipoPlazoGracia == '0') {
						saldo = prevSaldo + this.intereses;
					}
				}
				
			}
			
			//flujos.unshift(saldoi);
			flujos[0] = saldoi;
			console.log(flujos);
			let tir = irr(flujos);
			console.log(tir);
			console.log('La TIR es:', tir.toFixed(2) + '%');
			this.TIR = tir * 100;
			this.totalIntereses = totalInt;
		},

		descargarExcel() {
			const workbook = utils.table_to_book(document.getElementById('resultado'));
			const fileName = 'Método Francés.xlsx';
			writeFile(workbook, fileName);
		},

		Bono(){
			return this.bono;
		},
		calcularTIR(flujosDeEfectivo) {
			const tir = irr(flujosDeEfectivo);
			return tir * 100;
		},

	},
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');

.FrenchMethod {
	margin: 80px;
	padding: 20px;
	box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.1);
	border-radius: 25px;
}

.form-control {
	margin: 10px;
	border-radius: 5px;
	height: 30px;
	width: 15%;
}

.header {
	font-size: 30px;
	font-family: 'Josefin Sans', sans-serif;
}
.card-header{
    font-size: 30px;
    font-family: 'Josefin Sans', sans-serif;
}
</style>