import { Injectable } from "@angular/core";
import { HomeGateway } from "../gateway/home-gateway";

@Injectable({
    providedIn: 'root'
})
export class HomeUseCase {
    constructor(private _homeGateway: HomeGateway) { }
}