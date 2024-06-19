import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RhInterfaceComponent } from './rh-interface/rh-interface.component';
import { DAFInterfaceComponent } from './daf-interface/daf-interface.component'; // Assurez-vous d'importer ce composant
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service'; // Importez le service ici
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RhInterfaceComponent,
    DAFInterfaceComponent // Déclarez le composant ici
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    NgbModule,
    AppRoutingModule,
    HttpClientModule, // Importez HttpClientModule ici
    ReactiveFormsModule, // Importez ReactiveFormsModule ici si vous utilisez des formulaires réactifs
    CommonModule // Ajoutez cette ligne
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
})
export class AppModule { }
