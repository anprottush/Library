import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookIssueService {
  private bookIssueData: any;

  setData(data: any) {
    this.bookIssueData = data;
  }

  getData() {
    return this.bookIssueData;
  }
}
