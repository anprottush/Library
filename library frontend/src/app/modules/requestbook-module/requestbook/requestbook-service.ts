import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestBookService {
  private requestBookData: any;

  setData(data: any) {
    this.requestBookData = data;
  }

  getData() {
    return this.requestBookData;
  }
}
