import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//rutas, path

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiciosComponent } from './components/servicios/servicios.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contacto', component: ContactComponent},
    {path: 'servicios', component: ServiciosComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);