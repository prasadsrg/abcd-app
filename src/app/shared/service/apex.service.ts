import { MatSnackBar } from "@angular/material";
import { Injectable, Output, EventEmitter } from "@angular/core";
import { Observable, AsyncSubject, Subject, BehaviorSubject } from "rxjs";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class ApexService {
  private _loaderSubject: Subject<Boolean> = new BehaviorSubject(false);
  private _sessionUserSubject: Subject<Object> = new BehaviorSubject(null);
  private _menuSubject: Subject<Object[]> = new BehaviorSubject(null);

  constructor(
    private _domSanitizer: DomSanitizer,
    private _snackBarService: MatSnackBar
  ) {}
  showMessage(message: string) {
    this._snackBarService.open(message, "x", { duration: 999999999 });
  }
  showLoader(show: Boolean) {
    console.log("show loader: " + show);
    this._loaderSubject.next(show);
  }

  loaderEvent(): Observable<Boolean> {
    return this._loaderSubject.asObservable();
  }
  sessionUserEvent(): Observable<Object> {
    return this._sessionUserSubject.asObservable();
  }
  menuEvent(): Observable<Object[]> {
    return this._menuSubject.asObservable();
  }

  menuEmit(menu: any) {
    this._menuSubject.next(menu);
  }
  sessionUserEmit(sessionUser: any) {
    this._sessionUserSubject.next(sessionUser);
  }

  bypassURL(url: string) {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
