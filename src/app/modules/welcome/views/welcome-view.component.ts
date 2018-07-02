import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-welcome-view",
  template: `
  <aside class="alternative"> 
    <head >
      <mat-toolbar> <span> Welcome Page </span> 
      <span class="mat-spacer"></span>
      <button mat-raised-button color="primary">
        <mat-icon>add</mat-icon>
      </button>
      <button mat-raised-button color="primary">
      <mat-icon>filter_list</mat-icon>
    </button>
      </mat-toolbar>
      
    </head>
    <main class="gap">
          <app-welcome-news></app-welcome-news>
    </main>
  </aside>

  `,
  styles: []
})
export class WelcomeViewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
