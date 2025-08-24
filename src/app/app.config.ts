import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { authguardGuard } from './authguard-guard';
import { provideRouter } from '@angular/router';
// import { provideHttpClient, HTTP_INTERCEPTORS, withInterceptors } from '@angular/common/http';
// import { jwtInterceptorFn } from './jwt.interceptor';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { jwtInterceptorFn } from './jwt.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([jwtInterceptorFn])
    ),//needed for jwt interceptor
    // provideHttpClient(),
    { provide: 'AuthGuard', useValue: authguardGuard }
  ]
};
