import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestBookComponent } from './requestbook/requestbook.component';
import { RequestBookCreateComponent } from './requestbook/requestbook-create.component';

const routes: Routes = [
  { path: '', component: RequestBookComponent },
  { path: 'add', component: RequestBookCreateComponent },
  { path: 'edit/:id', component: RequestBookCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestBookModuleRoutingModule {}
