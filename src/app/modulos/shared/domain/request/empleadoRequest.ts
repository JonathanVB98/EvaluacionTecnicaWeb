export interface EmpleadoRequest {
    idEmpleado: number;
    nombre: string;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    idSucursal: number;
}