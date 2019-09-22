import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Components
import { MainHeaderComponent } from '../../app/components/main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';

@NgModule({
    declarations: [MainHeaderComponent, MainFooterComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        FormsModule
    ],
    exports: [MainHeaderComponent, MainFooterComponent]
})
export class ComponentsModule {

}
