import { Component, OnChanges, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'racepulse-analytics';
  localhost: string;

  constructor(protected keycloakAngular: KeycloakService) {
    this.localhost = 'https://villekuosmanen.github.io/F1PredictWeb/#/';
  }

  ngOnInit() {
    // try {
    //   setInterval(() => {
    //     const grafanaContainer: any = document.getElementById('racepulse');
    //     if (grafanaContainer) {
    //       grafanaContainer?.contentWindow?.document?.body?.classList?.append(
    //         'hide-menu'
    //       );
    //       console.log('Styles injected to racepulse to hide sidebar');
    //     }
    //   }, 1000);
    // } catch (err) {
    //   console.log(err);
    // }
  }

  logout() {
    this.keycloakAngular.logout();
  }
}
