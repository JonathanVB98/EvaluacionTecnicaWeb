import { Injectable } from "@angular/core";
import { ApiService } from "../../shared/infraestructure/services/api/api.service";
import { HomeGateway } from "../domain/gateway/home-gateway";
import { Observable } from "rxjs";
import { ResponseApi } from "../../shared/domain/models/ResponseApi";

@Injectable({
    providedIn: 'root'
})
export class HomeApiImpl extends HomeGateway {
    constructor(private apiService: ApiService){ super(); }

    getEmpleados(): Observable<ResponseApi> {
        return this.apiService.get<ResponseApi>(`empleado/ObtenerEmpleados`);
    }
}