import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { OffersComponent } from './Views/offers/offers.component';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { AuthComponent } from './Views/auth/admin/auth.component';
import { DetailsComponent } from './Views/details/details.component';
import { RegisterComponent } from './Views/auth/register/register.component';
import { LoginComponent } from './Views/auth/login/login.component';

export const routes: Routes = [
     { path:'', component : HomeComponent,},
     { path:'offers', component : OffersComponent},
     { path: 'dashboard', component : DashboardComponent},
     { path: 'auth', component : AuthComponent},
     { path: 'details', component : DetailsComponent},
     { path: 'register', component : RegisterComponent },
     { path: 'login' , component : LoginComponent}
];
