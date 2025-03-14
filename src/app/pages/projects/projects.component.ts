import { Component } from '@angular/core';
import { CardComponent, ICard } from '../../components/card/card.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  imports: [CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  public projects: ICard[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.projects = [
      {
        name: 'Brayan Roa ✨',
        date: '20 Jan 2025',
        tag: '🌴Feelin\' fresh',
        title: 'Wealth Flow 💰📊 (Full stack)',
        description: `
          A smart way to track and manage your finances.
  
          Personal Finance Manager is a web application designed to help users efficiently track their income, expenses, and budgets. Built with Node.js (TypeScript) and Angular, the platform provides a seamless experience for managing multiple wallets, scheduling recurring transactions, and analyzing financial trends with interactive dashboards.
  
          Key Features:
  
          • 💼 Wallet Management: Create and manage multiple wallets with custom starting balances.
  
          • 📅 Scheduled Transactions: Automate recurring income and expenses for better planning.
  
          • 📊 Budget Tracking: Set budgets for different categories and monitor spending in real time.
  
          • 📈 Interactive Dashboards: Gain insights with dynamic charts and reports.
  
          • 🔎 Advanced Filters: Search, filter, and categorize transactions for better analysis.
  
          • 🛡 Secure Authentication: User authentication with token-based security.
  
          • 🛠 Tech Stack: Node.js (TypeScript), Prisma ORM, PostgreSQL, Angular 17.
          
          • 👨‍💻 User test: email: guest@gmail.com / password: 123456.
          `,
        profileImg: 'profile.jpeg',
        link: {
          url: 'https://personal-finances-front.web.app/auth/login',
          label: 'Visit our website'
        },
        hashtags: ['NodeJS', 'Typescript', 'Clean architecture', 'Express', 'PostgreSQL', 'Prisma Orm', 'Angular', 'Docker'],
        // mainImg: 'dashboard.png', // Puedes agregar una imagen principal
        video: this.getSafeUrl("RnpCixWeucs")
      },
      {
        name: 'Brayan Roa 🚀',
        date: 'November 2022 - December 2022',
        tag: '💡 Alkemy',
        title: 'Digital Wallet',
        description: `
        Responsible for collaboratively designing and implementing the database, as well as contributing to backend development following best practices.
        `,
        profileImg: 'profile.jpeg',
        repository: {
          url: 'https://github.com/AgustinCanteros/grupo-n-2',
          label: 'Visit our backend repository'
        },
        hashtags: ['NodeJS', 'Express', 'Sequelize', 'MySql'],
        mainImg: 'github.jpg'
      },
      {
        name: 'Brayan Roa 🚀',
        date: '25 August 2022',
        tag: '🏫 UFPS',
        title: 'Backend Developer - Classroom Project Management',
        description: `
        Developed a web application for classroom project management at UFPS. Led the analysis and design phase to define the system architecture, database structure, and business logic before proceeding with the development. Implemented the entire backend to optimize administrative processes.  
        `,
        repository: {
          url: 'https://github.com/BrayanRoa/ayd_classroom_projects2.0',
          label: 'Visit the repository'
        },
        hashtags: ['Python', 'Flask', 'Flask-SQLAlchemy', 'Docker', 'PostgreSQL', 'Swagger'],
        profileImg: 'profile.jpeg',
        mainImg: 'github.jpg' // Imagen de referencia (ajústala según tu necesidad)
      }
    ]

  }



  // Método para sanitizar la URL del video
  getSafeUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }
}
