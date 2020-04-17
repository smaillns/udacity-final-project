import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterpriceComponent } from './enterprice/enterprice.component';


const routes: Routes = [
  {
    path: '',
    component: EnterpriceComponent,
    data: {
      title: "UČČI |  Nouvelle solution de commande en ligne"
    }
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
