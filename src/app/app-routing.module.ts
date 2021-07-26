import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForoforComponent } from './components/forofor/forofor.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { GuardGuard } from './service/guard.guard';

const routes: Routes = [
  {
    path: 'main',
    component: NavComponent,
  },
  {
    path: 'root',
    loadChildren: () => import('./root/root.module').then((m) => m.RootModule),
    canActivate: [GuardGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '', redirectTo: 'root', pathMatch: 'full' },
  { path: '**', component: ForoforComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
