import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { PacienteRountingModule } from './pacientes-routing.module';

@NgModule({
  declarations: [PacienteListComponent, PacienteFormComponent],
  imports: [
    CommonModule,
    PacienteRountingModule
  ]
})
export class PacientesModule { }
