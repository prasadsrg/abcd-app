import { Component, OnInit } from "@angular/core";
import { Props } from "../../../../common/props";
import { ControlContainer, NgForm } from "@angular/forms";
import { Address } from "../../../../entities/address";

@Component({
  selector: "app-profile-active",
  templateUrl: "./profile-active.component.html",
  styleUrls: ["./profile-active.component.scss"],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
 
})
export class ProfileActiveComponent implements OnInit {
  Props: any = Props;
  

  
  constructor() {}

  ngOnInit() {}
}
