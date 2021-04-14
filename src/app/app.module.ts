import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';


import {MatSelectModule} from '@angular/material/select'; 

import {MatToolbarModule} from '@angular/material/toolbar'; 

import {MatStepperModule} from '@angular/material/stepper'; 
import { MatIconModule } from '@angular/material/icon';
import {  ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {MatCardModule} from '@angular/material/card'; 
import { MatTabsModule } from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox'; 

import {MatRadioModule} from '@angular/material/radio'; 
import {MatListModule} from '@angular/material/list'; 



import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatChipsModule} from '@angular/material/chips'; 
import {MatMenuModule} from '@angular/material/menu'; 


import {MatRippleModule} from '@angular/material/core'; 

import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatSliderModule} from '@angular/material/slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatChipsModule,
    MatDatepickerModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSliderModule,
    NgbModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
