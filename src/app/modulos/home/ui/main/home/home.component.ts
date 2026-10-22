import { Component } from '@angular/core';
import { HomeService } from '../../../../shared/infraestructure/services/home/home.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Empleado } from '../../../../shared/domain/models/empleado';
import { EmpleadoRequest } from '../../../../shared/domain/request/empleadoRequest';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  empleados: Empleado[] = [];
  txtEmpleado: string = "";
  txtNroEmpleado: number = 0;
  fechaInicio: Date | null = null;
  fechaFin: Date | null = null;
  cmbSucursal: number = -1;
  constructor(
     private _homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getEmpleados(null);
  }
  async getEmpleados(request: EmpleadoRequest | null = null) {
    const result = await this._homeService.getEmpleados(request);

    this.empleados = result;
  }

  async buscarEmpleado() {
    const request: EmpleadoRequest = {
      idEmpleado: this.txtNroEmpleado,
      nombre: this.txtEmpleado,
      fechaInicio: this.fechaInicio,
      fechaFin: this.fechaFin,
      idSucursal: this.cmbSucursal
    };

    this.getEmpleados(request);
  }
}
