import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss'],
})
export class PredictionsComponent implements OnInit {
  localhost: string;
  identifier: string;
  constructor() {
    this.localhost = 'https://villekuosmanen.github.io/F1PredictWeb/#/';
    this.identifier = 'predict';
  }

  ngOnInit(): void {}

  doLoad() {
    let style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = `.pageHeader {
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
