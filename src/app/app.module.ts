import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MedicalServiceComponent } from './medical-service/medical-service.component';
import { ContactComponent } from './contact/contact.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AppointmentConfirmationComponent } from './appointment-confirmation/appointment-confirmation.component';

import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    BookAppointmentComponent,
    PageNotFoundComponent,
    MedicalServiceComponent,
    ContactComponent,
    AppointmentConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
