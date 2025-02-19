import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  cards = [
    {
      name: 'Brayan Roa ✨',
      date: '20 Jan 2023',
      tag: '🌴Feelin\' fresh',
      title: 'Hello World!',
      description: `This is my site where I try and post about what I'm up to and how to do things with code. 
                    You can follow along with RSS by hitting the "Follow" button up above. 
                    Or if you're only interested in stuff I wrote about, check out /writing.`,
      profileImg: 'paracaidad.jpg',
      mainImg: 'plane-3093859_1920.jpg' // Puedes agregar una imagen principal
    },
    {
      name: 'Brayan Roa 🚀',
      date: '10 Feb 2024',
      tag: '💡 Exploring new ideas',
      title: 'Angular Rocks!',
      description: `Angular is an amazing framework for building dynamic web applications. 
                    Here are some tips to get started.`,
      profileImg: 'paracaidad.jpg',
      mainImg: 'plane-3093859_1920.jpg'
    }
  ];

}
