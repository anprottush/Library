import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreBookService {
  


  private storeBookDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public storeBookData: Observable<any> = this.storeBookDataSubject.asObservable();

  setData(data: any): void {
    this.storeBookDataSubject.next(data);
  }

  getData(): any {
    return this.storeBookDataSubject.getValue();
  }
}
