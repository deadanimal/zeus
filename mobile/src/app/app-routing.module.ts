import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'walkthrough',
    pathMatch: 'full'
  },
  {
    path: 'auth/login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'auth/register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'auth/forgot',
    loadChildren: () => import('./auth/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then( m => m.AuthLayoutPageModule)
  },
  {
    path: 'core',
    loadChildren: () => import('./layouts/core-layout/core-layout.module').then( m => m.CoreLayoutPageModule)
  },
  {
    path: 'walkthrough',
    loadChildren: () => import('./pages/walkthrough/walkthrough.module').then( m => m.WalkthroughPageModule)
  },
  {
    path: 'profile-information',
    loadChildren: () => import('./core/profile-information/profile-information.module').then( m => m.ProfileInformationPageModule)
  },
  {
    path: 'profile-help',
    loadChildren: () => import('./core/profile-help/profile-help.module').then( m => m.ProfileHelpPageModule)
  },
  {
    path: 'profile-share',
    loadChildren: () => import('./core/profile-share/profile-share.module').then( m => m.ProfileSharePageModule)
  },
  {
    path: 'profile-about',
    loadChildren: () => import('./core/profile-about/profile-about.module').then( m => m.ProfileAboutPageModule)
  },
  {
    path: 'profile-hardware',
    loadChildren: () => import('./core/profile-hardware/profile-hardware.module').then( m => m.ProfileHardwarePageModule)
  },
  {
    path: 'profile-information-edit',
    loadChildren: () => import('./core/profile-information-edit/profile-information-edit.module').then( m => m.ProfileInformationEditPageModule)
  },
  {
    path: 'profile-help-ticket',
    loadChildren: () => import('./core/profile-help-ticket/profile-help-ticket.module').then( m => m.ProfileHelpTicketPageModule)
  },
  {
    path: 'bills',
    loadChildren: () => import('./core/bills/bills.module').then( m => m.BillsPageModule)
  },
  {
    path: 'appliances',
    loadChildren: () => import('./core/appliances/appliances.module').then( m => m.AppliancesPageModule)
  },
  {
    path: 'bill-detail',
    loadChildren: () => import('./core/bill-detail/bill-detail.module').then( m => m.BillDetailPageModule)
  },
  {
    path: 'bill-payment',
    loadChildren: () => import('./core/bill-payment/bill-payment.module').then( m => m.BillPaymentPageModule)
  },
  {
    path: 'appliance-detail',
    loadChildren: () => import('./core/appliance-detail/appliance-detail.module').then( m => m.ApplianceDetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
