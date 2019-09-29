import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Components
import { MainHeaderComponent } from '../../app/components/main-header/main-header.component';
import { MainFooterComponent } from '../../app/components/main-footer/main-footer.component';
import { SkeletonItemComponent } from '../../app/components/skeleton-item/skeleton-item';

@NgModule({
    declarations: [MainHeaderComponent, MainFooterComponent, SkeletonItemComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        FormsModule
    ],
    exports: [MainHeaderComponent, MainFooterComponent, SkeletonItemComponent]
})
export class ComponentsModule {

}
