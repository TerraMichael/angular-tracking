import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  @Input() value: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
