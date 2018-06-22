import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-welcome-page",
  template: `
    <aside class="alternative"> 
      <head >
        <mat-toolbar > <span> Welcome Page </span> </mat-toolbar>
      </head>

      <main class="gap">
       
            <app-welcome-news></app-welcome-news>
        
      </main>
      
    </aside>

  `,
  styles: []
})
export class WelcomePageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
