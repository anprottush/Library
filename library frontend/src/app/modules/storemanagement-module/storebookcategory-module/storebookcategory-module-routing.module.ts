import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreBookCategoryComponent } from './storebookcategory/storebookcategory.component';
import { StoreBookCategoryCreateComponent } from './storebookcategory/storebookcategorycreate.component';

const routes: Routes = [
  { path: 'index', component: StoreBookCategoryComponent },
  { path: 'create', component: StoreBookCategoryCreateComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreBookCategoryModuleRoutingModule { }
