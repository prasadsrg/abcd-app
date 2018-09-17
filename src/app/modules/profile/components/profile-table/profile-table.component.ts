import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-profile-table",
  templateUrl: "./profile-table.component.html",
  styleUrls: ["./profile-table.component.scss"]
})
export class ProfileTableComponent implements OnInit {
  @Input()
  inputData: any[] = [];

  @Output()
  outputEmitter: EventEmitter<any> = new EventEmitter<any>();

  scrollList: any;

  constructor() {}

  ngOnInit() {}

  editItem(item: any) {
    this.outputEmitter.emit(item);
  }
}
