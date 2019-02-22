import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

  pacientes: Paciente[];

  constructor() { }

  ngOnInit() {
    this.pacientes =  [
      {id: '1', name: 'almir1', email: 'almirafo@gmail.com', plano: 'PAR'},
      {id: '2', name: 'almir2', email: 'almirafo@gmail.com', plano: 'PAR'},
      {id: '3', name: 'almir3', email: 'almirafo@gmail.com', plano: 'PAR'},
      {id: '4', name: 'almir4', email: 'almirafo@gmail.com', plano: 'PAR'},
      {id: '5', name: 'almir5', email: 'almirafo@gmail.com', plano: 'PAR'},
      {id: '6', name: 'almir6', email: 'almirafo@gmail.com', plano: 'PAR'}
    ];
  }

}

export interface Paciente {
  id;
  name;
  email;
  plano;
}
