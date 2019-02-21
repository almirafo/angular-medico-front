import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {

  pacientes: [
    {nome: 'almir', email: 'almirafo@gmail.com', plano: 'PAR'},
    {nome: 'almir', email: 'almirafo@gmail.com', plano: 'PAR'},
    {nome: 'almir', email: 'almirafo@gmail.com', plano: 'PAR'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
