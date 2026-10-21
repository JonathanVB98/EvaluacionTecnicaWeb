import { Injectable } from "@angular/core";
import { HomeUseCase } from "../../../../home/domain/usecase/home-usecase";


@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor(
        private homeUseCase: HomeUseCase
    ) { }
}