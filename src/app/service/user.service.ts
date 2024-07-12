import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(): Observable<boolean> {

    return of(true).pipe(
      delay(3000)
    );
  }
}
