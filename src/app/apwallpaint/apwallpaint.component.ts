import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apwallpaint',
  templateUrl: './apwallpaint.component.html',
  styleUrls: ['./apwallpaint.component.css']
})
export class ApwallpaintComponent implements OnInit {
  acetenltr:string='assets/images/ace10l.jpg';
  ace2:string='assets/images/ace4ltr.jpg';
  apex11:string='assets/images/apex1.jpg';
  apex2:string='assets/images/apexultima.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
