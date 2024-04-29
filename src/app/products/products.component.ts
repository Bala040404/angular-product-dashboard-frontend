import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      "_id": "661e7d26bcbd647f1f81ed96",
      "name": "Football",
      "price": 1500,
      "category": "sports",
      "image": "http://res.cloudinary.com/dxmrpempn/image/upload/v1713274149/Products%20dashboard/image-1713274148809-761208932_xr2jkl.jpg",
      "user": "661aaab1ac648117248185c1",
      "available":true,
      "__v": 0
    },
    {
      "_id": "661e96af8e0869a75483fcd1",
      "name": "Razor",
      "price": 400,
      "category": "grooming",
      "image": "http://res.cloudinary.com/dxmrpempn/image/upload/v1713280686/Products%20dashboard/image-1713280684829-591350352_mdqchn.webp",
      "user": "661e7926657002e31417ae73",
      "available":true,
      "__v": 0
    },
    {
      "_id": "661e9bd1f0f77b0c6286f869",
      "name": "muscle spray",
      "price": 100,
      "category": "health care",
      "available":false,
      "image": "http://res.cloudinary.com/dxmrpempn/image/upload/v1713282001/Products%20dashboard/image-1713281999771-261943406_nikeo6.jpg",
      "user": "661aaab1ac648117248185c1",
      "__v": 0
    },
    {
      "_id": "661e9d44f0f77b0c6286f875",
      "name": "waterbootle",
      "price": 450,
      "category": "utiltiy",
      "available":true,
      "image": "http://res.cloudinary.com/dxmrpempn/image/upload/v1713282372/Products%20dashboard/image-1713282368391-751491283_rd1myl.webp",
      "user": "661e9d08f0f77b0c6286f871",
      "__v": 0
    }
  ]
}
