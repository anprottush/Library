import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreBookCategoryService {
  private storeBookCategoryData: any;

  setData(data: any) {
    this.storeBookCategoryData = data;
  }

  getData() {
    return this.storeBookCategoryData;
  }
}
