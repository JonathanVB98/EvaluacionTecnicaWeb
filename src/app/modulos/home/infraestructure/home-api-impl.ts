import { Injectable } from "@angular/core";
import { ApiService } from "../../shared/infraestructure/services/api/api.service";
import { HomeGateway } from "../domain/gateway/home-gateway";
import { Observable } from "rxjs";
import { ResponseApi } from "../../shared/domain/models/ResponseApi";
import { EmpleadoRequest } from "../../shared/domain/request/empleadoRequest";

@Injectable({
    providedIn: 'root'
})
export class HomeApiImpl extends HomeGateway {
    constructor(private apiService: ApiService){ super(); }

    getEmpleados(request: EmpleadoRequest | null = null): Observable<ResponseApi> {
        return this.apiService.post<ResponseApi>(
          'empleado/ObtenerEmpleados',
          request
        );
    }
}