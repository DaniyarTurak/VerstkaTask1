import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PromoComponent } from './components/promo/promo.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WeDoComponent } from './components/we-do/we-do.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [HomeComponent, PromoComponent, WelcomeComponent, WeDoComponent],
})
export class HomeModule {}
