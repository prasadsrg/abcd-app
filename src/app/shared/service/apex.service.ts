import { MatSnackBar } from "@angular/material";
import { Injectable, Output, EventEmitter } from "@angular/core";
import { Observable, AsyncSubject, Subject, BehaviorSubject } from "rxjs";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable()
export class ApexService {
  sessionUserEvent: EventEmitter<any> = new EventEmitter();
  menuEvent: EventEmitter<any> = new EventEmitter();

  private loaderSubject = new BehaviorSubject<Boolean>(false);
  loaderEvent: Observable<Boolean> = this.loaderSubject.asObservable();

  constructor(
    private _domSanitizer: DomSanitizer,
    private _snackBarService: MatSnackBar
  ) {}
  showMessage(message: string) {
    this._snackBarService.open(message, "x", { duration: 3000 });
  }
  showLoader(show: Boolean) {
    console.log("show-loader:" + show);
    this.loaderSubject.next(show);
  }

  sessionUserEmit(sessionUser: any) {
    console.log(sessionUser);
    this.sessionUserEvent.emit(sessionUser);
  }
  menuEmit(menu: any) {
    this.menuEvent.emit(menu);
  }
  bypassURL(url: string) {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
