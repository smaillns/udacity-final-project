import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterpriceComponent } from './enterprice/enterprice.component';
import {ClientAccountComponent} from "./client-space/client-account/client-account.component";


const routes: Routes = [
  {
    path: '',
    component: EnterpriceComponent,
    data: {
      title: "UČČI |  Nouvelle solution de commande en ligne"
    }
  },
  {
    path: 'client',
    component: ClientAccountComponent,
    data: {
      title: "UČČI |  Mon espace"
    }
  },


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
