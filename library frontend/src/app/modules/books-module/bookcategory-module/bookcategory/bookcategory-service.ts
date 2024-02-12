import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookCategoryService {
  private bookCategoryData: any;

  setData(data: any) {
    this.bookCategoryData = data;
  }

  getData() {
    return this.bookCategoryData;
  }
}
