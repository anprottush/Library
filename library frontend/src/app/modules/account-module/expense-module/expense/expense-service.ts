import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private expenseData: any;

  setData(data: any) {
    this.expenseData = data;
  }

  getData() {
    return this.expenseData;
  }
}
