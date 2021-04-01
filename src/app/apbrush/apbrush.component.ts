import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-apbrush',
  templateUrl: './apbrush.component.html',
  styleUrls: ['./apbrush.component.css']
})
export class ApbrushComponent implements OnInit {
fourinchbrush:string='assets/images/4inchbrush.jpg';
  twoinchbrush:string='assets/images/2inchbrush.jpg';
  oneinchbrush:string='assets/images/1inchbrush.jpg';
  nineinchroller:string='assets/images/9inchroller.jpg';
  nineinchroller2:string='assets/images/9inchroller2.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
