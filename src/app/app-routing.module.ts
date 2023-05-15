import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { MedicalServiceComponent } from './medical-service/medical-service.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  {path:"",  redirectTo: 'HomeComponent', pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:RegisterComponent},
  {path:"about", component:AboutComponent},
  {path:"book-appointment", component:BookAppointmentComponent},
  {path:"med-service", component:MedicalServiceComponent},
  {path:"contact", component:ContactComponent},
  

  {path:"page-not-found", component:PageNotFoundComponent},
  {path:"**", redirectTo:"/page-not-found"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
