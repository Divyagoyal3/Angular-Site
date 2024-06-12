import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  animations:[
    trigger('slide', [
      transition(':increment', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class CarouselComponent {
  images: string[] = [
    'url_to_image_1',
    'url_to_image_2',
    // Add more image URLs as needed
  ];

  sliderPosition: string = '';

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.sliderPosition = (this.sliderPosition === 'left' ? 'right' : 'left');
    }, 5000); // Adjust the interval as needed
  }
}
