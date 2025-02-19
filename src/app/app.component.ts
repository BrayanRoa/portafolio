import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { TrendingSkillsComponent } from './components/trending-skills/trending-skills.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TrendingSkillsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  menuItems = [
    { label: 'About me', route: 'about' },
    { label: 'Projects', route: 'projects' },
    { label: 'Experience', route: 'experience' },
    { label: 'Contact', route: 'contact' }
  ];
  selectedItem = this.menuItems[0].label; // Primer botón seleccionado por defecto

  selectItem(item: string) {
    this.selectedItem = item;
  }
}
