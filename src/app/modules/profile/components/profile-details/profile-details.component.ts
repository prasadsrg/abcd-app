import { Component, OnInit, Input } from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";
import { Profile } from "../../../../entities/profile";
import { Props } from "../../../../common/props";

@Component({
  selector: "app-profile-details",
  templateUrl: "./profile-details.component.html",
  styleUrls: ["./profile-details.component.scss"],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ProfileDetailsComponent implements OnInit {
  Props: any = Props;
  constructor() {}

  @Input()
  profile: Profile;

  ngOnInit() {}
}
