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
        url: 'https://prisma.digital/',
        label: 'Visit our website'
      },
      hashtags: [],
      profileImg: 'profile.jpeg',
      mainImg: 'prisma-digital.png' // Puedes agregar una imagen principal
    }
    ,
    // {
    //   name: 'Brayan Roa 🚀',
    //   date: '10 Feb 2024',
    //   tag: '💡 Exploring new ideas',
    //   title: 'Angular Rocks!',
    //   description: `Angular is an amazing framework for building dynamic web applications. 
    //                   Here are some tips to get started.`,
    //   profileImg: 'paracaidad.jpg',
    //   mainImg: 'plane-3093859_1920.jpg'
    // }
  ]
}
