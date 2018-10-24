import { Component, OnInit, Input } from "@angular/core";
import { Props } from "../../../../common/props";
import { Branch } from "../../../../entities/branch";

@Component({
  selector: "app-branches-details",
  templateUrl: "./branches-details.component.html",
  styleUrls: ["./branches-details.component.scss"]
})
export class BranchesDetailsComponent implements OnInit {
  Props: any = Props;

  constructor() {}

  @Input()
  branch: Branch;

  ngOnInit() {}
}
