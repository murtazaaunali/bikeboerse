import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsCarouselComponent } from './products-carousel/products-carousel.component';
import { CategoriesCarouselComponent } from './categories-carousel/categories-carousel.component';
import { GoogleAdsComponent } from './google-ads/google-ads.component';
import { VideoCarouselComponent } from './video-carousel/video-carousel.component';
import { VideoFilterComponent } from './video-filter/video-filter.component';

@NgModule({
    declarations: [
        MainHeaderComponent,
        MainFooterComponent,
        SkeletonItemComponent,
        MyaccountHeaderComponent,
        AccountUserinfoComponent,
        ProductsListComponent,
        ProductsCarouselComponent,
        CategoriesCarouselComponent,
        GoogleAdsComponent,
        VideoCarouselComponent,
        VideoFilterComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        MainHeaderComponent,
        MainFooterComponent,
        SkeletonItemComponent,
        MyaccountHeaderComponent,
        AccountUserinfoComponent,
        ProductsListComponent,
        ProductsCarouselComponent,
        CategoriesCarouselComponent,
        GoogleAdsComponent,
        VideoCarouselComponent,
        VideoFilterComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ComponentsModule {

}
