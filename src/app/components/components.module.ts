import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Components
import { MainHeaderComponent } from '../../app/components/main-header/main-header.component';


@NgModule({
  declarations: [MainHeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ],
  exports: [MainHeaderComponent]
})
export class ComponentsModule { 

}
