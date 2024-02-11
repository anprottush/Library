import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private memberData: any;

  setData(data: any) {
    this.memberData = data;
  }

  getData(): Observable<any> {
    return of(this.memberData).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
