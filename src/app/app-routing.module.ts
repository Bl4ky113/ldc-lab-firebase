import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/view/view-routing.module').then((m) => m.ViewRoutingModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./components/view/view-routing.module').then((m) => m.ViewRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
