import { Injectable } from "@angular/core";
import { HomeGateway } from "../gateway/home-gateway";
import { Observable } from "rxjs";
import { EmpleadoRequest } from "../../../shared/domain/request/empleadoRequest";

@Injectable({
    providedIn: 'root'
})
export class HomeUseCase {
    constructor(private _homeGateway: HomeGateway) { }

    getEmpleados(request: EmpleadoRequest | null = null): Observable<any> {
        return this._homeGateway.getEmpleados(request);
    }
}