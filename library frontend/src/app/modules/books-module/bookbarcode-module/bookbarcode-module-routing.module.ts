import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookBarcodeComponent } from './bookbarcode/bookbarcode.component';


const routes: Routes = [{ path: 'index', component: BookBarcodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookBarcodeModuleRoutingModule {}
