import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IncomeService {
  private incomeData: any;

  setData(data: any) {
    this.incomeData = data;
  }

  getData() {
    return this.incomeData;
  }
}
