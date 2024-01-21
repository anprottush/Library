import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookbarcodeComponent } from './bookbarcode/bookbarcode.component';

const routes: Routes = [{ path: 'index', component: BookbarcodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookbarcodeModuleRoutingModule {}
