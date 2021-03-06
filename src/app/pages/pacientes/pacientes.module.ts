import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { PacienteRountingModule } from './pacientes-routing.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [PacienteListComponent, PacienteFormComponent],
  imports: [
    CommonModule,
    PacienteRountingModule,
    TableModule
  ]
})
export class PacientesModule { }


