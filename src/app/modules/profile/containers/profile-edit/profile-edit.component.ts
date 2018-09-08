import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../../common/data.service";
import { ProfileService } from "../../profile.service";

@Component({
  selector: "app-profile-edit",
  templateUrl: "./profile-edit.component.html",
  styleUrls: ["./profile-edit.component.scss"]
})
export class ProfileEditComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {}
}
