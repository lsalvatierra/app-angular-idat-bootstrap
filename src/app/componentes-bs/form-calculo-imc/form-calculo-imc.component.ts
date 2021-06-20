import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-calculo-imc',
  templateUrl: './form-calculo-imc.component.html',
  styleUrls: ['./form-calculo-imc.component.scss']
})
export class FormCalculoImcComponent implements OnInit {

  frmImc = {
    nombre: null,
    peso: null,
    talla: null, 
    resultado: 0
  };
  mostrarResultado = false;

  lstPacientes: Paciente = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  calcularSuma(){
    this.frmImc.resultado = Number(this.frmImc.peso)  + Number(this.frmImc.talla);
    this.mostrarResultado = true;
    this.lstPacientes.push({id: 1, nombre: String(this.frmImc.nombre), imc: this.frmImc.resultado });
  }

}
type Paciente = Array<{ id: number; nombre: string, imc: number }>;
  