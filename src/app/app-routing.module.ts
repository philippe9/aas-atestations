import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'user-space', loadChildren: () => import('./pages/user-space/user-space.module').then(m => m.UserSpaceModule) },
  { path: 'subscription', loadChildren: () => import('./pages/subscription/subscription.module').then(m => m.SubscriptionModule) },
  { path: 'faqs', loadChildren: () => import('./pages/faqs/faqs.module').then(m => m.FaqsModule) },
  { path: 'about-us', loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
  { path: 'tarif', loadChildren: () => import('./pages/tarif/tarif.module').then(m => m.TarifModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
