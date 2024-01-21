import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreBookCategoryModuleRoutingModule } from './storebookcategory-module-routing.module';
import { StoreBookCategoryComponent } from './storebookcategory/storebookcategory.component';


@NgModule({
  declarations: [
    StoreBookCategoryComponent
  ],
  imports: [
    CommonModule,
    StoreBookCategoryModuleRoutingModule
  ]
})
export class StoreBookCategoryModuleModule { }
