import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-welcome-page",
  template: `
    <mat-toolbar color="accent"> <span> Welcome Page </span> </mat-toolbar>
  `,
  styles: []
})
export class WelcomePageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
