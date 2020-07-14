import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importaciones necesarias en app.module para el funcionamiento
import { HttpClientModule } from '@angular/common/http';
//es para que ande el httpclient de los servicios
import { routing, appRoutingProviders } from './app.routing';
//importamos el app.routing en el modulo porque sino no funciona, tambien importar en los providers aqui abajo


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PopularComponent } from './components/popular/popular.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopularComponent,
    TutorialComponent,
    ContactComponent
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
