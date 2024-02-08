import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreBookCategoryModuleRoutingModule } from './storebookcategory-module-routing.module';
import { StoreBookCategoryComponent } from './storebookcategory/storebookcategory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StoreBookCategoryComponent
  ],
  imports: [
    CommonModule,
    StoreBookCategoryModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StoreBookCategoryModuleModule { }
