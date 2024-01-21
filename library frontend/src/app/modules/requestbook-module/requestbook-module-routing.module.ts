import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestBookComponent } from './requestbook/requestbook.component';
import { RequestBookCreateComponent } from './requestbook/requestbookcreate.component';

const routes: Routes = [
  { path: 'index', component: RequestBookComponent },
  { path: 'create', component: RequestBookCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestBookModuleRoutingModule {}
