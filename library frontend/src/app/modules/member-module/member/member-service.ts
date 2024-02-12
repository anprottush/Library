import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  // private memberData: any;

  // setData(data: any) {
  //   this.memberData = data;
  // }

  // getData(): Observable<any> {
  //   return of(this.memberData).pipe(
  //     map((data: any) => {
  //       return data;
  //     })
  //   );
  // }


  private memberDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public memberData: Observable<any> = this.memberDataSubject.asObservable();

  setData(data: any): void {
    this.memberDataSubject.next(data);
  }

  getData(): any {
    return this.memberDataSubject.getValue();
  }
}
