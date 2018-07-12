import { Component, Input, Output, EventEmitter } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";
import { Observable } from "rxjs";

@Component({
  selector: "navbar",
  template: `
    <mat-sidenav-container class="sidenav-container" >
      <mat-sidenav 
        #drawer
        class="sidenav alternative"
        fixedInViewport="true"
        [attr.role]="isHandset ? 'dialog' : 'navigation'"
        [mode]="(isHandset | async)!.matches ? 'over' : 'side'"
        [opened]="sessionUser && !(isHandset | async)!.matches"
        >
        <mat-toolbar color="primary" style="height:144px !important" *ngIf="sessionUser">
          <div fxLayout="column" fxLayoutAlign="space-evenly center" style="width: 100%; height: 100%">
          <mat-icon class="md-36">face</mat-icon>
          <caption>{{sessionUser.name}}</caption>
          </div>
        </mat-toolbar>
        <mat-nav-list *ngIf="sessionUser">
          <ng-template ngFor let-item [ngForOf]="menuList">
            <a mat-list-item  (click)="redirect(item.link)"> {{item.name}}</a>
            <mat-divider></mat-divider>
          </ng-template>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content style="overflow: hidden !important;">
        <mat-toolbar color="primary" *ngIf="sessionUser">
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="drawer.toggle()"
            *ngIf="(isHandset | async)!.matches">
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
          <span style="font-weight: 500">{{title}}</span>
        </mat-toolbar>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      .sidenav-container {
        height: 100%;
      }
      .mat-toolbar {
        box-shadow: 0 2px 5px 0 hsla(240, 3%, 85%, 0.7);
        transform: translateZ(0);
        z-index: 99;
      }

      .sidenav {
        width: 180px;
        box-shadow: 1px 0 1px rgba(0, 0, 0, 0.24);
      }
      .mat-list-item {
        height: 35px !important;
      }
    `
  ]
})
export class NavbarComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  );
  @Input() title: string;
  @Input() menuList: any[];
  @Input() sessionUser: any;
  @Output() outputEvent = new EventEmitter();
  constructor(private breakpointObserver: BreakpointObserver) {}

  redirect(link: string) {
    this.outputEvent.emit(link);
  }
}
