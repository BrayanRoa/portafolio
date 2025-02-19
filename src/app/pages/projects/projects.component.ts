import { Component } from '@angular/core';
import { CardComponent, ICard } from '../../components/card/card.component';

@Component({
  selector: 'app-projects',
  imports: [CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  public projects: ICard[] = [
    {
      name: 'Brayan Roa ✨',
      date: '20 Jan 2023',
      tag: '🌴Feelin\' fresh',
      title: 'Wealth Flow 💰📊',
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
        `,
      profileImg: 'profile.jpeg',
      link: {
        url: 'https://personal-finances-front.web.app/auth/login',
        label: 'Visit our website'
      },
      hashtags: ['NodeJS', 'Typescript', 'Clean architecture', 'Express', 'PostgreSQL', 'Prisma Orm', 'Angular', 'Docker'],
      mainImg: 'login-personal-finances.png' // Puedes agregar una imagen principal
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
      mainImg: 'plane-3093859_1920.jpg'
    }
  ]

}
