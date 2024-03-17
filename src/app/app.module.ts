import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MyFormComponent } from './my-form/my-form.component';
import { AppComponent } from './app.component';
import { BankCertificateComponent } from './bank-certificate/bank-certificate.component';
import { RoadCertificateComponent } from './road-certificate/road-certificate.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    BankCertificateComponent,
    RoadCertificateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
