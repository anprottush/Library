import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreBookCategoryComponent } from './storebookcategory/storebookcategory.component';
import { StoreBookCategoryCreateComponent } from './storebookcategory/storebookcategory-create.component';

const routes: Routes = [
  { path: '', component: StoreBookCategoryComponent },
  { path: 'add', component: StoreBookCategoryCreateComponent },
  { path: 'edit/:id', component: StoreBookCategoryCreateComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreBookCategoryModuleRoutingModule { }
