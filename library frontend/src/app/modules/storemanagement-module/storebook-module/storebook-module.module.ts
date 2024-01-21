import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreBookModuleRoutingModule } from './storebook-module-routing.module';
import { StoreBookComponent } from './storebook/storebook.component';
import { StoreBookCreateComponent } from './storebook/storebookcreate.component';



@NgModule({
  declarations: [
    StoreBookComponent,
    StoreBookCreateComponent
  ],
  imports: [
    CommonModule,
    StoreBookModuleRoutingModule
  ]
})
export class StoreBookModuleModule { }
