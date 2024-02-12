import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RackComponent } from './rack/rack.component';
import { RackCreateComponent } from './rack/rack-create.component';

const routes: Routes = [
  { path: '', component: RackComponent },
  { path: 'add', component: RackCreateComponent },
  { path: 'edit/:id', component: RackCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RackModuleRoutingModule {}
