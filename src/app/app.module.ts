import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SafePipe } from './pipes/safe-url.pipe';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { PredictionsComponent } from './components/predictions/predictions.component';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'race_pulse_realm',
        clientId: 'public-client',
      },
      initOptions: {
        onLoad: 'login-required',
        // silentCheckSsoRedirectUri:
        //   window.location.origin + '/assets/silent-check-sso.html'
      },
    });
}

@NgModule({
  declarations: [AppComponent, SafePipe, AnalyticsComponent, PredictionsComponent],
  imports: [AppRoutingModule, BrowserModule, KeycloakAngularModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
