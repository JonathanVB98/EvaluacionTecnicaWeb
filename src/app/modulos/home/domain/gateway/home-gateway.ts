import { Observable } from "rxjs";
import { ResponseApi } from "../../../shared/domain/models/ResponseApi";
import { EmpleadoRequest } from "../../../shared/domain/request/empleadoRequest";

export abstract class HomeGateway {
    abstract getEmpleados(request?: EmpleadoRequest | null): Observable<ResponseApi>;
    abstract getSucursales(): Observable<ResponseApi>;
}