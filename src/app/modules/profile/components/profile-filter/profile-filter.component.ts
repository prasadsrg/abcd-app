import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-profile-filter",
  templateUrl: "./profile-filter.component.html",
  styleUrls: ["./profile-filter.component.scss"]
})
export class ProfileFilterComponent implements OnInit {
  @Input()
  inputData: any = {};
  @Output()
  outputEmitter: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  apply() {
    this.outputEmitter.emit(true);
  }
  cancel() {
    this.outputEmitter.emit(false);
  }
}
