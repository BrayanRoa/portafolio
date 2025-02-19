import { Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';

export const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: AboutMeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'experience', component: ExperienceComponent },
    // { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
    // { path: 'experience', loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule) },
    // { path: 'about-me', loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMeModule) },
    { path: '**', redirectTo: 'about', pathMatch: 'full' }
];
