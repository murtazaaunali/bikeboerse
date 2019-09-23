import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PremiumOptionsPage } from './premium-options.page';
import { ComponentsModule } from './../components/components.module';
const routes: Routes = [
  {
    path: '',
    component: PremiumOptionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PremiumOptionsPage]
})
export class PremiumOptionsPageModule {}
