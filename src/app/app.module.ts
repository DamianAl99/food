import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//importaciones necesarias en app.module para el funcionamiento
import { HttpClientModule } from '@angular/common/http';
//es para que ande el httpclient de los servicios
import { routing, appRoutingProviders } from './app.routing';
//importamos el app.routing en el modulo porque sino no funciona, tambien importar en los providers aqui abajo


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AboutComponent } from './components/about/about.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ServiciosComponent,
    AboutComponent,
    BeneficiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
