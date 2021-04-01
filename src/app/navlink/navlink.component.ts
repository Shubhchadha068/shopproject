import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navlink',
  templateUrl: './navlink.component.html',
  styleUrls: ['./navlink.component.css']
})
export class NavlinkComponent implements OnInit {
  myImage:string="assets/images/bgimage.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
