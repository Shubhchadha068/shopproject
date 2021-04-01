import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doorpaint',
  templateUrl: './doorpaint.component.html',
  styleUrls: ['./doorpaint.component.css']
})
export class DoorpaintComponent implements OnInit {

  enamel1:string='assets/images/enamel1ltr.webp';
  enamel2:string='assets/images/enamel500ml.jpg';
  enamel3:string='assets/images/enamel3.jpg';
  enamel4g:string='assets/images/enamel4.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
