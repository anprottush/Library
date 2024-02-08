import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreBookModuleRoutingModule } from './storebook-module-routing.module';
import { StoreBookComponent } from './storebook/storebook.component';
import { StoreBookCreateComponent } from './storebook/storebook-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StoreBookComponent,
    StoreBookCreateComponent
  ],
  imports: [
    CommonModule,
    StoreBookModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StoreBookModuleModule { }
