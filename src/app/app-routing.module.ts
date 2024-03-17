// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { BankCertificateComponent } from './bank-certificate/bank-certificate.component';
import { RoadCertificateComponent } from './road-certificate/road-certificate.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'fill-form', component:MyFormComponent, canActivate: [AuthGuard] },
  {path:'bank-certificate', component:BankCertificateComponent, canActivate: [AuthGuard]},
  {path:'road-certificate', component:RoadCertificateComponent, canActivate: [AuthGuard]},
  {path:'**', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
