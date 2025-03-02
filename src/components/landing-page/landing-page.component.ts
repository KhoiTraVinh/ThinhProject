import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShareModule } from '../../share-module';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ShareModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  ngOnInit(): void {

  }
  responsiveOptions = [];
  products = [{ "name": "test", "image": "logo.jpg", "price": "500", "severity": "secondary" },
    { "name": "test 1", "image": "logo.jpg", "price": "500", "severity": "secondary" },
    { "name": "test 2", "image": "logo.jpg", "price": "500", "severity": "secondary" },
    { "name": "test 3", "image": "logo.jpg", "price": "500", "severity": "secondary" },
    { "name": "test 4", "image": "logo.jpg", "price": "500", "severity": "secondary" },
    { "name": "test 5", "image": "logo.jpg", "price": "500", "severity": "secondary" },
    { "name": "test 6", "image": "logo.jpg", "price": "500", "severity": "secondary" }
  ]

  images = [
    { itemImageSrc: 'assets/images/logo.jpg', thumbnailImageSrc: 'assets/images/logo.jpg', alt: 'Image 1', title: 'Title 1' },
    { itemImageSrc: 'assets/images/logo.jpg', thumbnailImageSrc: 'assets/images/logo.jpg', alt: 'Image 2', title: 'Title 2' },
    { itemImageSrc: 'assets/images/logo.jpg', thumbnailImageSrc: 'assets/images/logo.jpg', alt: 'Image 3', title: 'Title 3' },
    { itemImageSrc: 'assets/images/logo.jpg', thumbnailImageSrc: 'assets/images/logo.jpg', alt: 'Image 4', title: 'Title 4' },
    { itemImageSrc: 'assets/images/logo.jpg', thumbnailImageSrc: 'assets/images/logo.jpg', alt: 'Image 5', title: 'Title 5' },
    { itemImageSrc: 'assets/images/logo.jpg', thumbnailImageSrc: 'assets/images/logo.jpg', alt: 'Image 6', title: 'Title 6' },
  ];


}
