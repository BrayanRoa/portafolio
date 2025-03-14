import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

export interface ICard {
  name: string;
  date: string;
  tag: string;
  title: string;
  description: string;
  profileImg: string;
  mainImg?: string; // Puedes agregar una imagen principal
  video?: SafeResourceUrl;
  hashtags: string[];
  repository?: {
    url: string;
    label: string;
  },
  link?: {
    url: string;
    label: string;
  }
}


@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  cards: ICard[] = [];

}
