import { Observable } from "rxjs";
import { ResponseApi } from "../../../shared/domain/models/ResponseApi";

export abstract class HomeGateway {
    abstract getHome(): Observable<ResponseApi>;
}