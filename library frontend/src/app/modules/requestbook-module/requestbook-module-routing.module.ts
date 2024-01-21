import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestbookComponent } from './requestbook/requestbook.component';
import { RequestbookCreateComponent } from './requestbook/requestbookcreate.component';

const routes: Routes = [
  { path: 'index', component: RequestbookComponent },
  { path: 'create', component: RequestbookCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestbookModuleRoutingModule {}
