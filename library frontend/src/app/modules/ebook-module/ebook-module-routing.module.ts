import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EbookComponent } from './ebook/ebook.component';
import { EbookCreateComponent } from './ebook/ebookcreate.component';

const routes: Routes = [
  { path: 'index', component: EbookComponent },
  { path: 'create', component: EbookCreateComponent },
  { path: 'edit/:id', component: EbookCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EbookModuleRoutingModule {}
