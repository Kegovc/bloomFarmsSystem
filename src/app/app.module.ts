import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ValidatedInputDirective } from './shared/directives/validated-input.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    ValidatedInputDirective,
    NavbarComponent,
    FooterComponent,
    PortafolioComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
