import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookBarcodeModuleRoutingModule } from './bookbarcode-module-routing.module';
import { BookBarcodeComponent } from './bookbarcode/bookbarcode.component';


@NgModule({
  declarations: [BookBarcodeComponent],
  imports: [CommonModule, BookBarcodeModuleRoutingModule],
})
export class BookBarcodeModuleModule {}
