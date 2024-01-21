import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RackComponent } from './rack/rack.component';
import { RackCreateComponent } from './rack/rackcreate.component';

const routes: Routes = [
  { path: 'index', component: RackComponent },
  { path: 'create', component: RackCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RackModuleRoutingModule {}
