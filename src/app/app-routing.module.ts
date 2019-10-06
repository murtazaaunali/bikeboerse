import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
    { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
    { path: 'messages', loadChildren: './messages/messages.module#MessagesPageModule' },
    { path: 'my-products', loadChildren: './my-products/my-products.module#MyProductsPageModule', canActivate: [AuthGuard] },
    { path: 'premium-options', loadChildren: './premium-options/premium-options.module#PremiumOptionsPageModule' },
    { path: 'premium-option', loadChildren: './premium-option/premium-option.module#PremiumOptionPageModule' },
    { path: 'products/:categoryid', loadChildren: './products/products.module#ProductsPageModule' },
    { path: 'wishlist', loadChildren: './wishlist/wishlist.module#WishlistPageModule', canActivate: [AuthGuard] },
    { path: 'policies', loadChildren: './policies/policies.module#PoliciesPageModule' },
    { path: 'my-account', loadChildren: './my-account/my-account.module#MyAccountPageModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule', canActivate: [AuthGuard] },
    { path: 'product/:id', loadChildren: './product/product.module#ProductPageModule' },
    { path: 'chats', loadChildren: './chats/chats.module#ChatsPageModule' },
    { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
    { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
    { path: 'add-product', loadChildren: './add-product/add-product.module#AddProductPageModule', canActivate: [AuthGuard] },
    { path: 'videos', loadChildren: './videos/videos.module#VideosPageModule' },
    { path: 'video/:id', loadChildren: './video/video.module#VideoPageModule' },
    { path: 'edit-product', loadChildren: './edit-product/edit-product.module#EditProductPageModule', canActivate: [AuthGuard] },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
