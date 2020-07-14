import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//rutas, path

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PopularComponent } from './components/popular/popular.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'popular', component: PopularComponent},
    {path: 'tutorial', component: TutorialComponent},
    {path: 'contacto', component: ContactComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);