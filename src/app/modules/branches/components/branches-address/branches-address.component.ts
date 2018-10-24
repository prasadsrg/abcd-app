import { Component, OnInit, Input } from "@angular/core";
import { Props } from "../../../../common/props";
import { Address } from "../../../../entities/address";

@Component({
  selector: "app-branches-address",
  templateUrl: "./branches-address.component.html",
  styleUrls: ["./branches-address.component.scss"]
})
export class BranchesAddressComponent implements OnInit {
  Props: any = Props;

  @Input()
  address: Address;

  constructor() {}

  ngOnInit() {}
}
