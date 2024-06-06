import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KevPage } from './kev.page';

const routes: Routes = [
  {
    path: '',
    component: KevPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KevPageRoutingModule {}
