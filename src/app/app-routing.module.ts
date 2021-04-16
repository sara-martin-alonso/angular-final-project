import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

import { IndexComponent } from './pages/index/index.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  
  {path: 'home', component: IndexComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'es/home', component: IndexComponent},
  {path: 'es/projects', component: ProjectsComponent},
  {path: 'es/about', component: AboutComponent},
  {path: 'es/contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
