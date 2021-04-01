import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myImage:string="assets/images/closefront.jpeg";
  constructor() { }

  ngOnInit(): void {
  }

}
