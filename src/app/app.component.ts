import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TrendingSkillsComponent } from './components/trending-skills/trending-skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, TrendingSkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  menuItems = [
    { label: 'About me', route: '/about' },
    { label: 'Projects', route: '/projects' },
    { label: 'Experience', route: '/experience' },
    { label: 'Contact', route: '/contact' }
  ];
  selectedItem: string = '';

  constructor(private router: Router) {
    // Detecta cambios en la URL y actualiza el menú activo
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.selectedItem = this.menuItems.find(item => item.route === event.url)?.label || '';
      }
    });
  }

  selectItem(item: string) {
    this.selectedItem = item;
  }
}
