import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './user-management/admin.module#AdminModule' },
  // { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
  // { path: 'login', loadChildren: './login/login.module#LoginModule' },
  // { path: 'forgot-password/:id', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule' },
  // { path: 'reset-password', component: ResetPasswordComponent, canActivate:[CanresetGuard] },
  // { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
  // { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
  // { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
  // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
  // { path: 'jas-under-maintainance', component: SiteUnderMaintainanceComponent },
  // { path: '**', redirectTo: 'not-found' },
  //{ path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
