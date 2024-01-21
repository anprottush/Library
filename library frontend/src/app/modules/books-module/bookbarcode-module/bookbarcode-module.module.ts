import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookbarcodeModuleRoutingModule } from './bookbarcode-module-routing.module';
import { BookbarcodeComponent } from './bookbarcode/bookbarcode.component';

@NgModule({
  declarations: [BookbarcodeComponent],
  imports: [CommonModule, BookbarcodeModuleRoutingModule],
})
export class BookbarcodeModuleModule {}
