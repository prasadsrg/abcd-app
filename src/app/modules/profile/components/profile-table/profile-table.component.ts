import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-profile-table",
  templateUrl: "./profile-table.component.html",
  styleUrls: ["./profile-table.component.scss"]
})
export class ProfileTableComponent implements OnInit {
  @Input()
  inputData: any[] = [];
  scrollList: any;

  constructor() {}

  ngOnInit() {}
}
