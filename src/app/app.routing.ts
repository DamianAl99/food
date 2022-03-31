import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//rutas, path

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AboutComponent } from './components/about/about.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contacto', component: ContactComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'sobreNosotros', component: AboutComponent},
    {path: 'beneficios', component: BeneficiosComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);