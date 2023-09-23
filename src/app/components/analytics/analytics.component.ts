import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent implements OnInit {
  identifier = 'racepulse';

  constructor() {}

  ngOnInit(): void {}

  doLoad() {
    let style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = `.explorationNavigationContent {
      display: none
    }
              `;
    try {
      const grafanaContainer: any = document.getElementById(this.identifier);
      if (grafanaContainer) {
        grafanaContainer?.contentWindow?.document?.head?.appendChild(style);
        console.log('Styles injected to grafana to hide sidebar');
      }
    } catch (err) {
      console.log(err);
    }
  }
}
