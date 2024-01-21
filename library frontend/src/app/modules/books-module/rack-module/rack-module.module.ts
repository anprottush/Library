import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RackModuleRoutingModule } from './rack-module-routing.module';
import { RackComponent } from './rack/rack.component';
import { RackCreateComponent } from './rack/rackcreate.component';

@NgModule({
  declarations: [RackComponent, RackCreateComponent],
  imports: [CommonModule, RackModuleRoutingModule],
})
export class RackModuleModule {}
