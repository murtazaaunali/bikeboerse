import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Components
import { MainHeaderComponent } from '../../app/components/main-header/main-header.component';
import { MainFooterComponent } from '../../app/components/main-footer/main-footer.component';
import { SkeletonItemComponent } from '../../app/components/skeleton-item/skeleton-item';
import { MyaccountHeaderComponent } from './myaccount-header/myaccount-header.component';
import { AccountUserinfoComponent } from './account-userinfo/account-userinfo.component';

@NgModule({
    declarations: [MainHeaderComponent, MainFooterComponent, SkeletonItemComponent, MyaccountHeaderComponent, AccountUserinfoComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        FormsModule
    ],
    exports: [MainHeaderComponent, MainFooterComponent, SkeletonItemComponent, MyaccountHeaderComponent, AccountUserinfoComponent]
})
export class ComponentsModule {

}
