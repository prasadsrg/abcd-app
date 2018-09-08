import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../../common/data.service";
import { ProfileService } from "../../profile.service";

@Component({
  selector: "app-profile-search",
  templateUrl: "./profile-search.component.html",
  styleUrls: ["./profile-search.component.scss"]
})
export class ProfileSearchComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {}
}
