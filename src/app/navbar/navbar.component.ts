import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  image:string="assets/images/shoplogo.jpeg";
  constructor() { }

  ngOnInit(): void {
  }

}
