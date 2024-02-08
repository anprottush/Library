import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private memberData: any;

  setData(data: any) {
    this.memberData = data;
  }

  getData() {
    return this.memberData;
  }
}
