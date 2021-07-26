import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { home } from './animation/route.animation';
import { HomeComponent } from './home/component/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        data: { title: '🏡 Accueil', animation: home },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
