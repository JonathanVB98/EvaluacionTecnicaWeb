import { Injectable } from "@angular/core";
import { HomeGateway } from "../gateway/home-gateway";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HomeUseCase {
    constructor(private _homeGateway: HomeGateway) { }

    getEmpleados(): Observable<any> {
        return this._homeGateway.getEmpleados();
    }
}