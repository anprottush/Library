import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EbookModuleRoutingModule } from './ebook-module-routing.module';
import { EbookComponent } from './ebook/ebook.component';
import { EbookCreateComponent } from './ebook/ebookcreate.component';

@NgModule({
  declarations: [EbookComponent, EbookCreateComponent],
  imports: [
    CommonModule,
    EbookModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class EbookModuleModule {}
