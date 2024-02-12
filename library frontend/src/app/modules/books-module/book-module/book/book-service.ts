import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  


  private bookDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public bookData: Observable<any> = this.bookDataSubject.asObservable();

  setData(data: any): void {
    this.bookDataSubject.next(data);
  }

  getData(): any {
    return this.bookDataSubject.getValue();
  }
}
