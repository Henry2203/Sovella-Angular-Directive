import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  showingStatus = "Hide Details";
  text: boolean = true;
  count = 1;
  loki = [];
  i: number = 0;
  constructor() {

  }

  textShow() {
    if (this.text === false) this.text = true, this.showingStatus = "Hide Details";

    else this.text = false, this.showingStatus = "Display Details";

    this.i++;
    this.loki.push(this.i)
  }
  ngOnInit(): void {
  }

}
