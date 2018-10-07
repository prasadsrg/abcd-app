import { Component, Input, Output, EventEmitter } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { AnimationService } from "../shared/service/animation.service";
import {
  trigger,
  animate,
  style,
  group,
  query,
  transition
} from "@angular/animations";
import { Props } from "../common/props";

export const routerTransition = trigger("routerTransition", [
  transition("* <=> *", [
    query(
      ":enter, :leave",
      style({ position: "fixed", width: "100%", height: "100%" }),
      {
        optional: true
      }
    ),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateX(100%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateX(0%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(-100%)" }))
        ],
        { optional: true }
      )
    ])
  ])
]);

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
            <a mat-list-item  (click)="redirect(item.menu)"> {{item.name}}</a>
            <mat-divider></mat-divider>
          </ng-template>
          <a mat-list-item  (click)="redirect('auth/login')"> Singout</a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content style="overflow: hidden !important;">
        <mat-toolbar color="primary" *ngIf="sessionUser">
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            style="float: right"
            (click)="drawer.toggle()"
            *ngIf="(isHandset | async)!.matches">
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
          <span style="font-weight: 500">{{title}}</span>

        </mat-toolbar>
        <span [@routerTransition]="o.isActivated ? o.activatedRoute : ''">
          <router-outlet #o="outlet"></router-outlet>
        </span>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      .sidenav-container {
        height: 100%;
      }
      .mat-toolbar {
        transform: translateZ(0);
        z-index: 99;
      }

      .sidenav {
        width: 180px;
      }
      .mat-list-item {
        height: 35px !important;
      }
    `
  ],
  animations: [routerTransition]
})
export class NavbarComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  );
  @Input()
  title: string;
  @Input()
  menuList: any[];
  @Input()
  sessionUser: any;
  @Output()
  outputEvent = new EventEmitter();
  constructor(private breakpointObserver: BreakpointObserver) {}

  redirect(link: string) {
    if (link.indexOf("/") > 0) {
      this.outputEvent.emit(link);
    } else {
      this.outputEvent.emit(Props.MENU[link.toUpperCase()].link);
    }
  }
}
