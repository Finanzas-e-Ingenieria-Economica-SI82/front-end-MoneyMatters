<template>
  <app-bar></app-bar>
  <div class="card">
    <div class="card-header">
      Convert Rate
    </div>
    <div class="card-body">
      <form class="text-center">
        <div class="form-group col align-self-center">
          <label>Tipo de Conversión</label>
          <select @change="this.changeConversion" id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>Nominal a Nominal</option>
            <option>Nominal a Efectiva</option>
            <option>Efectiva a Efectiva</option>
            <option>Efectiva a Nominal</option>
            <button type="button" class="btn btn-primary btn-lg" @click="this.Result">SHOW</button>
          </select>
        </div>
        <div v-if="typeConversion == 'Nominal a Nominal'">
          <h3 class="card-title">De Tasa Nominal a Tasa Nominal</h3>
          <div class="form-row col align-self-center">
            <div class="form-group col">
              <label>(P) Plazo de Tasa Nominal</label>
              <select id="PNN" class="form-control">
                <option>Diario</option>
                <option>Quincenal</option>
                <option>Mensual</option>
                <option>Bimestral</option>
                <option>Trimestral</option>
                <option>Cuatrimestral</option>
                <option>Semestral</option>
                <option selected>Anual</option>
                <option>Especial</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="inputCity">(TN) Tasa nominal</label>
              <input v-model="TN" type="text" class="form-control">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-5">
              <label>(PC) Periodo de capitalización</label>
              <select id="PCNN" class="form-control">
                <option>Diario</option>
                <option>Quincenal</option>
                <option>Mensual</option>
                <option>Bimestral</option>
                <option>Trimestral</option>
                <option>Cuatrimestral</option>
                <option>Semestral</option>
                <option>Anual</option>
                <option>Especial</option>
              </select>
            </div>
            <div class="form-group col-md-5">
              <label>(TNR) Tasa Nominal Requerida</label>
              <select id="TRNN" class="form-control">
                <option>Diario</option>
                <option>Quincenal</option>
                <option>Mensual</option>
                <option>Bimestral</option>
                <option>Trimestral</option>
                <option>Cuatrimestral</option>
                <option>Semestral</option>
                <option>Anual</option>
                <option>Especial</option>
              </select>
            </div>

          </div>
          <div class="form-group col-md-6">
            <label>(PCR) Periodo de Capitalización</label>
            <select id="PCRNN" class="form-control">
              <option selected>Choose...</option>
              <option>Diario</option>
              <option>Quicenal</option>
              <option>Mensual</option>
              <option>Bimestral</option>
              <option>Trimestral</option>
              <option>Cuatrimestral</option>
              <option>Semestral</option>
              <option selected>Anual</option>
              <option>Especial</option>
            </select>
          </div>
        </div>
        <div v-if="typeConversion == 'Nominal a Efectiva' ">
          <h3 class="card-title">De Tasa Nominal a Tasa Efectiva</h3>
          <div class="form-row col align-self-center">
            <div class="form-group col">
              <label>(DA) Dias por año</label>
              <select id="DANE" class="form-control">
                <option>360</option>
                <option>365</option>
              </select>
            </div>
            <div class="form-group col">
              <label>(P) Plazo de Tasa Nominal</label>
              <select id="PNE" class="form-control">
                <option>Diario</option>
                <option>Quincenal</option>
                <option>Mensual</option>
                <option>Bimestral</option>
                <option>Trimestral</option>
                <option>Cuatrimestral</option>
                <option>Semestral</option>
                <option selected>Anual</option>
                <option>Especial</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">(TN) Tasa nominal</label>
              <input v-model="TN" type="text" class="form-control">
            </div>
            <div class="form-group col-md-5">
              <label>(PC) Periodo de capitalización</label>
              <select id="PCNE" class="form-control">
                <option>Diario</option>
                <option>Quincenal</option>
                <option>Mensual</option>
                <option>Bimestral</option>
                <option>Trimestral</option>
                <option>Cuatrimestral</option>
                <option>Semestral</option>
                <option>Anual</option>
                <option>Especial</option>
              </select>
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>(TE) Tasa efectiva requerida</label>
            <select id="TRNE" class="form-control">
              <option selected>Choose...</option>
              <option>Diario</option>
              <option>Quincenal</option>
              <option>Mensual</option>
              <option>Bimestral</option>
              <option>Trimestral</option>
              <option>Cuatrimestral</option>
              <option>Semestral</option>
              <option selected>Anual</option>
              <option>Especial</option>
            </select>
          </div>
        </div>
        <div v-if="typeConversion == 'Efectiva a Efectiva'">
          <h3 class="card-title">De Tasa Efectiva a Tasa Efectiva</h3>
          <div class="form-row col align-self-center">
            <div class="form-group col">
              <label>(P) Plazo de Tasa Efectiva</label>
              <select id="PEE" class="form-control">
                <option>Diario</option>
                <option>Quincenal</option>
                <option>Mensual</option>
                <option>Bimestral</option>
                <option>Trimestral</option>
                <option>Cuatrimestral</option>
                <option>Semestral</option>
                <option selected>Anual</option>
                <option>Especial</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label>(TE) Tasa Efectiva</label>
              <input v-model="TE" type="text" class="form-control">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col">
              <label>(TER) Tasa Efectiva Requerida</label>
              <select id="TREE" class="form-control">
                <option>Diario</option>
                <option>Quincenal</option>
                <option>Mensual</option>
                <option>Bimestral</option>
                <option>Trimestral</option>
                <option>Cuatrimestral</option>
                <option>Semestral</option>
                <option selected>Anual</option>
                <option>Especial</option>
              </select>
            </div>
          </div>
        </div>
        <div v-if="typeConversion == 'Efectiva a Nominal'">
          <h3 class="card-title">De Tasa Efectiva a Tasa Nominal</h3>
          <div class="form-row col align-self-center">
            <div class="form-group col">
              <label>(P) Plazo de Tasa Efectiva</label>
              <select id="PEN" class="form-control">
                <option>Diario</option>
                <option>Quincenal</option>
                <option>Mensual</option>
                <option>Bimestral</option>
                <option>Trimestral</option>
                <option>Cuatrimestral</option>
                <option>Semestral</option>
                <option selected>Anual</option>
                <option>Especial</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="inputCity">(TE) Tasa Efectiva</label>
              <input v-model="TE" type="text" class="form-control">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-5">
              <label>(TN) Tasa Nominal Requerida</label>
              <select id="TREN" class="form-control">
                <option>Diario</option>
                <option>Quincenal</option>
                <option>Mensual</option>
                <option>Bimestral</option>
                <option>Trimestral</option>
                <option>Cuatrimestral</option>
                <option>Semestral</option>
                <option>Anual</option>
                <option>Especial</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label>(PC) Periodo de Capitalización</label>
              <select id="PCEN" class="form-control">
                <option selected>Choose...</option>
                <option>Diario</option>
                <option>Quincenal</option>
                <option>Mensual</option>
                <option>Bimestral</option>
                <option>Trimestral</option>
                <option>Cuatrimestral</option>
                <option>Semestral</option>
                <option selected>Anual</option>
                <option>Especial</option>
              </select>
            </div>
          </div>
        </div>
        <pv-button style="background: #46A2AE; border-style: none; width: 10%; justify-content: center; font-weight: bold;" type="button" class="btn btn-primary btn-lg" @click="this.Result">Mostrar</pv-button>
        <pv-button style="background: #46A2AE; border-style: none; width: 10%; justify-content: center; font-weight: bold;" type="submit" label="Nuevo" />
        <router-link to="/french_method">
          <pv-button style="background: #46A2AE; border-style: none; width: 10%; justify-content: center; font-weight: bold;" type="button" class="btn btn-secondary btn-lg">Salir</pv-button>
        </router-link>
        <div class="form-group col-md-6">
          <label for="inputCity">Resultados</label>
          <h1>{{this.R.toFixed(7)}} %</h1>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    import AppBar from '../components/AppBar.vue';
    export default {
      components: { AppBar },
      name: 'Convert_rate',
      data(){
        return{
          typeConversion: " ",
          DA: 0,
          P: 0,
          TN: 0,
          PC: 0,
          TR: 0,
          m: 0,
          n: 0,
          R: 0,
          TEP: 0,
          PCR: 0,
          TE:0,
          times: ["Diario", "Quincenal", "Mensual", "Bimestral", "Trimestral", "Cuatrimestral", "Semetral", "Anual"],
        }
      },
  created() {

  },
  methods:{

    changeConversion(){
      this.typeConversion = document.getElementById('inputState').value;
    },
    assignValues(time){
      let value;
      for(let i = 0; i < this.times.length; i++){
        if(time == "Diario")
          value = 1;
        if(time == "Quincenal")
          value = 15;
        if(time == "Mensual")
          value = 30;
        if(time == "Bimestral")
          value = 60;
        if(time  == "Trimestral")
          value = 90;
        if(time == "Cuatrimestral")
          value = 120;
        if(time == "Semestral")
          value = 180;
        if(time == "Anual")
          value = 360
      }
      return value;
    },
    nominalNominal(){
      this.P = this.assignValues(document.getElementById('PNN').value);
      this.PC = this.assignValues(document.getElementById('PCNN').value);
      this.TR = this.assignValues(document.getElementById('TRNN').value);
      this.PCR = this.assignValues(document.getElementById('PCRNN').value);
      this.m = this.P / this.PC;
      this.n = this.TR / this.PC;

      this.TN = this.TN/100;
      this.TEP = Math.pow(1+(this.TN/this.m), this.n) - 1

      this.m = this.TR / this.PCR;
      this.n = this.TR / this.PCR;

      this.R = this.m*((Math.pow(1+this.TEP, 1/this.n)) - 1)*100
    },
    nominalEfectiva(){
      this.DA = document.getElementById('DANE').value;
      this.P = this.assignValues(document.getElementById('PNE').value);
      this.PC = this.assignValues(document.getElementById('PCNE').value);
      this.TR = this.assignValues(document.getElementById('TRNE').value);

      this.n = this.TR / this.PC;
      this.m = this.P / this.PC;

      this.TN = this.TN/100;
      this.R = (Math.pow(1+(this.TN/this.m), this.n) - 1) * 100
    },
    efectivaEfectiva(){
      this.P = this.assignValues(document.getElementById('PEE').value);
      this.TR = this.assignValues(document.getElementById('TREE').value);

      this.TE = this.TE/100;
      this.R = (Math.pow(1 + this.TE, (this.TR/this.P)) - 1) * 100
    },
    efectivaNominal(){
      this.P = this.assignValues(document.getElementById('PEN').value);
      this.PC = this.assignValues(document.getElementById('PCEN').value);
      this.TR = this.assignValues(document.getElementById('TREN').value);

      this.m = this.TR / this.PC;
      this.n = this.P / this.PC;

      console.log(this.P)
      console.log(this.PC)
      console.log(this.TR)

      this.TE = this.TE/100;
      this.R = this.m*((Math.pow(1+this.TE, 1/this.n)) - 1)*100
    },
    Result(){
      switch (this.typeConversion) {
        case 'Nominal a Nominal':
          this.nominalNominal();
          break;
        case 'Nominal a Efectiva':
          this.nominalEfectiva();
          break;
        case 'Efectiva a Efectiva':
          this.efectivaEfectiva();
          break;
        case 'Efectiva a Nominal':
          this.efectivaNominal();
          break;
      }
    }
  }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap');
    .card{
      margin: 80px;
      padding: 20px;
      box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.1);
      border-radius: 25px;
    }
    .card-body{
      padding-top: 20px;
    }
    button{
      color: white;
      margin: 10px;
      display: inline-block;
      border-radius: 10px;
      width: 100px;
      height: 45px;
      transition: 0.5s;
    }
    .form-group{
      margin: 15px;
    }
    .form-control{
      margin: 10px;
      border-radius: 5px;
      height: 30px;
      width: 15%;
    }
    .card-header{
      font-size: 30px;
      font-family: 'Josefin Sans', sans-serif;
    }
    button:hover{
      background-color: rgb(51, 51, 51);
    }

</style>