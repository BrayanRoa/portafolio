import { Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';

export const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: AboutMeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: '**', redirectTo: 'about' }
];
