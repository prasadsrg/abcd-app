import { Component, OnInit, EventEmitter } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ApexService } from "./shared/service/apex.service";
import { AppService } from "./shared/service/app.service";

@Component({
  selector: "app-root",
  template: `
    <apex-progress-bar></apex-progress-bar>
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

  constructor(
    private apexService: ApexService,
    private appService: AppService
  ) {
    this.apexService.menuEvent().subscribe($event => this.menuEvent($event));
    this.apexService
      .sessionUserEvent()
      .subscribe($event => this.sessionUserEvent($event));
  }

  ngOnInit(): void {
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
    this.appService.navigate($event, []);
  }
}
