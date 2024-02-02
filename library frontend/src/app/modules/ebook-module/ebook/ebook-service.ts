import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EbookService {
  private ebookData: any;

  setData(data: any) {
    this.ebookData = data;
  }

  getData() {
    return this.ebookData;
  }
}
