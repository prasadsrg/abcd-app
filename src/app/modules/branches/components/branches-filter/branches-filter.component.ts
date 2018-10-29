import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-branches-filter",
  templateUrl: "./branches-filter.component.html",
  styleUrls: ["./branches-filter.component.scss"]
})
export class BranchesFilterComponent implements OnInit {
  @Input()
  inputData: any = {};

  constructor() {}

  ngOnInit() {}
}
