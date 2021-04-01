import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apwallputty',
  templateUrl: './apwallputty.component.html',
  styleUrls: ['./apwallputty.component.css']
})
export class ApwallputtyComponent implements OnInit {
  acrylicputty:string='assets/images/acrylicputty.png';
  bagputty:string='assets/images/bagputty.png';
  bagputty2:string='assets/images/bagputty2.png';
  constructor() { }

  ngOnInit(): void {
  }

}
