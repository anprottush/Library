import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './income/income.component';
import { ExpenseCreateComponent } from '../expense-module/expense/expensecreate.component';
import { IncomeCreateComponent } from './income/incomecreate.component';


const routes: Routes = [
  { path: 'index', component: IncomeComponent },
  { path: 'create', component: IncomeCreateComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomeModuleRoutingModule {}
