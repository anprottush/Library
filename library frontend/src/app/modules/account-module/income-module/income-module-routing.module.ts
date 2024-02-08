import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './income/income.component';
import { IncomeCreateComponent } from './income/income-create.component';


const routes: Routes = [
  { path: '', component: IncomeComponent },
  { path: 'add', component: IncomeCreateComponent },
  { path: 'edit/:id', component: IncomeCreateComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomeModuleRoutingModule {}
