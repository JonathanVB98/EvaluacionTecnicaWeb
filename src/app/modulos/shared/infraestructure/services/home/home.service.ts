import { Injectable } from "@angular/core";
import { HomeUseCase } from "../../../../home/domain/usecase/home-usecase";
import { lastValueFrom } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor(
        private homeUseCase: HomeUseCase
    ) { }

    async getHome(): Promise<any>{
        const res = await lastValueFrom(this.homeUseCase.getHome());
        return res.data;
    }
}