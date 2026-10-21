import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';
import { HomeGateway } from './modulos/home/domain/gateway/home-gateway';
import { HomeApiImpl } from './modulos/home/infraestructure/home-api-impl';
import { HomeUseCase } from './modulos/home/domain/usecase/home-usecase';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    provideHttpClient(), // HttpClient global

    // Dependency injection for HttpClientModule
    { provide: HomeGateway, useClass: HomeApiImpl },


    // Use cases
    HomeUseCase
  ]
};
