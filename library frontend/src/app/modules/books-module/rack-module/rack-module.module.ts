import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RackModuleRoutingModule } from './rack-module-routing.module';
import { RackComponent } from './rack/rack.component';
import { RackCreateComponent } from './rack/rack-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RackComponent, RackCreateComponent],
  imports: [CommonModule, RackModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule],
})
export class RackModuleModule {}
