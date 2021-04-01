import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  myImage:string="assets/images/approducts.png"
  brushImage:string="assets/images/apbrushimage.jpg"
  wallPaint:string="assets/images/newwallpaint.jpg"
  wallPutty:string="assets/images/apwallputty.jpg"
  createx:string="assets/images/apcreatex.jpg"
  doorPaint:string="assets/images/doorpaint.png"
  smartCare:string="assets/images/smartcare.jpg"
  constructor(private router:Router) { }

  // ngOnInit(): void {
  // }

}
