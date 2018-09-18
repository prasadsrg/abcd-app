import { Component, OnInit, Input } from "@angular/core";
import { Props } from "../../../../common/props";
import { ControlContainer, NgForm } from "@angular/forms";
import { Address } from "../../../../entities/address";

@Component({
  selector: "app-profile-address",
  templateUrl: "./profile-address.component.html",
  styleUrls: ["./profile-address.component.scss"],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ProfileAddressComponent implements OnInit {
  Props: any = Props;
  @Input()
  address: Address;

  constructor() {}

  ngOnInit() {}
}
