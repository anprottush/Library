import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreBookComponent } from './storebook/storebook.component';
import { StoreBookCreateComponent } from './storebook/storebook-create.component';

const routes: Routes = [
  { path: '', component: StoreBookComponent },
  { path: 'add', component: StoreBookCreateComponent },
  { path: 'edit/:id', component: StoreBookCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreBookModuleRoutingModule { }
