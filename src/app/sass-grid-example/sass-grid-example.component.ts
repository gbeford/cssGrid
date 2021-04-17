import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sass-grid-example',
  templateUrl: './sass-grid-example.component.html',
  styleUrls: ['./sass-grid-example.component.scss']
})
export class SassGridExampleComponent implements OnInit {
  whatever: true;
  constructor() { }

  ngOnInit(): void {
    this.whatever = true;
  }

}
