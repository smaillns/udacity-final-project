import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterpriceComponent } from './layouts/enterprice/enterprice.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'enterprice',
    pathMatch: 'full',
  },
  {
    path: 'enterprice',
    component: EnterpriceComponent,
    data: {
      title: "UČČI |  Nouvelle solution de commande en ligne"
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
