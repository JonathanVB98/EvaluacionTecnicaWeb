import { Component } from '@angular/core';
import { HomeService } from '../../../../shared/infraestructure/services/home/home.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Empleado } from '../../../../shared/domain/models/empleado';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  empleados: Empleado[] = [];
  constructor(
     private _homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getEmpleados();
  }
  async getEmpleados(){
    const result = await this._homeService.getEmpleados();

    this.empleados = result;
  }
}
