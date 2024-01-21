import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreBookComponent } from './storebook/storebook.component';
import { StoreBookCreateComponent } from './storebook/storebookcreate.component';

const routes: Routes = [
  { path: 'index', component: StoreBookComponent },
  { path: 'create', component: StoreBookCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreBookModuleRoutingModule { }
