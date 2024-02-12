import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RackService {
  private rackData: any;

  setData(data: any) {
    this.rackData = data;
  }

  getData() {
    return this.rackData;
  }
}
