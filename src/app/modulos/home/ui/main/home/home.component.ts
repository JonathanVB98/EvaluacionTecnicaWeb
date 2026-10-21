import { Component } from '@angular/core';
import { HomeService } from '../../../../shared/infraestructure/services/home/home.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
     private _homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getHome();
  }
  async getHome(){
    const result = await this._homeService.getHome();

    console.log(result);
  }
}
