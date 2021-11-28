import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/modules/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './user-management/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ng6-toastr-notifications';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,AngularMaterialModule,HttpClientModule,ToastrModule.forRoot(),HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
