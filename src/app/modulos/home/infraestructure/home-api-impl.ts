import { Injectable } from "@angular/core";
import { ApiService } from "../../shared/infraestructure/services/api/api.service";
import { HomeGateway } from "../domain/gateway/home-gateway";

@Injectable({
    providedIn: 'root'
})
export class HomeApiImpl extends HomeGateway {
    constructor(private apiService: ApiService){ super(); }
}