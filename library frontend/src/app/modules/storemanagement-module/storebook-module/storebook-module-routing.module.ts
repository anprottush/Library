import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreBookComponent } from './storebook/storebook.component';
import { StoreBookCreateComponent } from './storebook/storebook-create.component';

const routes: Routes = [
  { path: 'index', component: StoreBookComponent },
  { path: 'create', component: StoreBookCreateComponent },
  { path: 'edit/:id', component: StoreBookCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreBookModuleRoutingModule { }
