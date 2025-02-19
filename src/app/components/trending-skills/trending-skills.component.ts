import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trending-skills',
  imports: [CommonModule],
  templateUrl: './trending-skills.component.html',
  styleUrl: './trending-skills.component.css'
})
export class TrendingSkillsComponent {
  public socialLinks = [
    {
      class: "linkedin-btn",
      name: '@brayanroa',
      platform: "LinkedIn",
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/brayan-andres-roa-lopez-45922421b/"
    },
    {
      class: "instagram-btn",
      name: '@brayan_roa',
      platform: "Instagram",
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/brayan_roa/"
    },
    {
      class: "github-btn",
      name: '@BrayanRoa',
      platform: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/BrayanRoa"
    }
  ];

}
