import { Component, OnInit, EventEmitter } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ApexService } from "./shared/service/apex.service";
import { AppService } from "./shared/service/app.service";

@Component({
  selector: "app-root",
  template: `
    <mat-progress-bar 
      color="waring" 
      mode="indeterminate" 
      style="position: fixed; z-index: 9999" 
      *ngIf="true == (showLoading | async)">
    </mat-progress-bar>

    <navbar 
      class="mat-typography" 
      [title]="title" 
      [sessionUser]="sessionUser" 
      [menuList]="menuList"
      (outputEvent) = "outputEvent($event)"
    >
    </navbar>
    
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = "TeraData Studio";
  menuList: any[] = [];
  sessionUser: any = null;
  showLoading: Observable<Boolean>;
  constructor(
    private apexService: ApexService,
    private appService: AppService
  ) {
    this.showLoading = this.apexService.loaderEvent;
    this.apexService.menuEvent.subscribe($event => this.menuEvent($event));
    this.apexService.sessionUserEvent.subscribe($event =>
      this.sessionUserEvent($event)
    );
  }

  ngOnInit(): void {
    let showLoader = false;
    // setInterval(() => {
    //   showLoader = !showLoader;
    //   this.appService.showLoader(showLoader);
    // }, 2000);
    //this.appService.showLoader(true);
    let sessionUser = this.appService.getSessionUser();
    this.appService.sessionUserEmit(sessionUser);

    let menuList = this.appService.getSessionItem("menu");
    this.appService.menuEmit(menuList);
  }

  menuEvent($event: any) {
    console.log($event);
    this.menuList = $event;
  }
  sessionUserEvent($event: any) {
    console.log($event);
    this.sessionUser = $event;
  }

  outputEvent($event: any) {
    console.log($event);
  }

  // getUserMenuList() {
  //   return [
  //     {
  //       name: "Home",
  //       link: "welcome/welcome"
  //     },
  //     {
  //       name: "DashBoard",
  //       link: "dashboard/dashboard"
  //     },
  //     {
  //       name: "AppData",
  //       link: "appdata/appdata"
  //     },
  //     {
  //       name: "Access Menu",
  //       link: "access_menu/access_menu"
  //     },
  //     {
  //       name: "Profile",
  //       link: "profile/profile"
  //     }
  //   ];
  // }
}
