import { Component } from '@angular/core';
import { CardComponent, ICard } from '../../components/card/card.component';

@Component({
  selector: 'app-experience',
  imports: [CardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  public experiences: ICard[] = [
    {
      name: 'Brayan Roa ✨',
      date: 'March 2025 - Present',
      tag: ' 🏢 Broers',
      title: 'Backend Developer',
      description: `
        Colombian tech company collaborating with ICFES-related educational projects.  
        I work mainly as a backend developer using Node.js and Python to support and enhance large-scale platforms.  
        My role focuses on optimizing data processing pipelines, improving system efficiency, and helping complete strategic projects that impact national educational assessments.

        Key Contributions:

        • Developed and maintained backend services using Node.js (NestJS) and Python, ensuring performance and scalability.  

        • Optimized critical data-processing flows, reducing response times and improving resource usage.  

        • Contributed to the final stages of ICFES-related projects, ensuring timely delivery and compliance with quality standards.

        • Collaborated with cross-functional teams to debug, refactor, and deploy reliable backend solutions.

      `,
      link: {
        url: 'https://www.linkedin.com/company/broerscol/posts/?feedView=all', // actualiza si tienes otra URL oficial
        label: 'Visit the LinkedIn'
      },
      hashtags: ['Node.js', 'Python', 'Backend', 'ICFES', 'NestJS'],
      profileImg: 'profile.jpeg',
      mainImg: 'broers.png' // puedes usar el logo o imagen que prefieras
    },
    {
      name: 'Brayan Roa ✨',
      date: 'April 2023 - November 2025',
      tag: ' 🏢 Prisma Digital',
      title: 'Backend Developer',
      description: `
        International company based in the U.S., where I worked with Python and Node.js to build scalable services and APIs.  
        I collaborated with global teams, enhancing both my technical expertise and communication skills.  
        This experience strengthened my backend development capabilities and allowed me to contribute to high-level tech solutions.

        Key Contributions:

        • Designed, developed, and maintained RESTful APIs using Python, Flask, SQLAlchemy, and PostgreSQL.

        • Led the implementation of key features, from requirement analysis to quality testing.

        • Optimized code and solved critical issues to improve performance and ensure project goals were met.
        `,
      link: {
        url: 'https://www.linkedin.com/company/prisma-dig/',
        label: 'Visit the linkedin'
      },
      hashtags: ['Node.js', 'Python', 'Backend', 'Flask', 'Postgres'],
      profileImg: 'profile.jpeg',
      mainImg: 'prisma-digital.png' // Puedes agregar una imagen principal
    },

  ]
}
