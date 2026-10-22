import { Injectable } from "@angular/core";
import { HomeUseCase } from "../../../../home/domain/usecase/home-usecase";
import { lastValueFrom } from "rxjs";
import { EmpleadoRequest } from "../../../domain/request/empleadoRequest";


@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor(
        private homeUseCase: HomeUseCase
    ) { }

    async getEmpleados(request: EmpleadoRequest | null = null): Promise<any>{
        const res = await lastValueFrom(this.homeUseCase.getEmpleados(request));
        return res.data;
    }

    async getSucursales(): Promise<any> {
        const res = await lastValueFrom(this.homeUseCase.getSucursales());
        return res.data;
    }
}