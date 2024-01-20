import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductModuleRoutingModule } from './product-module-routing.module';
import { ProductComponent } from './product/product.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    ProductComponent,
    BrandComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    ProductModuleRoutingModule,

    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModuleModule { }
