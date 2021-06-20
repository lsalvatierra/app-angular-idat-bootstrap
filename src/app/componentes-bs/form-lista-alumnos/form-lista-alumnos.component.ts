import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-lista-alumnos',
  templateUrl: './form-lista-alumnos.component.html',
  styleUrls: ['./form-lista-alumnos.component.scss']
})
export class FormListaAlumnosComponent implements OnInit {
  
  lstAlumnos = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
