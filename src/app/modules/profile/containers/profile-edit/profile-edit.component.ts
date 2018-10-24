import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../../common/data.service";
import { ProfileService } from "../../profile.service";
import { Profile } from "../../../../entities/profile";
// import { AccessService } from "../../../access/access.service";

@Component({
  selector: "app-profile-edit",
  templateUrl: "./profile-edit.component.html",
  styleUrls: ["./profile-edit.component.scss"]
})
export class ProfileEditComponent implements OnInit {
  profile: Profile = null;

  constructor(
    private dataService: DataService,
    private profileService: ProfileService
  ) {
    this.profile = new Profile();
    let id = this.dataService.navParam("id");
    if (id) {
      this.entityData(id);
    }
  }

  ngOnInit() {}

  entityData(id: any) {
    this.profileService.entityData(id).subscribe((data: any) => {
      this.profile = data;
      console.log(this.profile);
    });
  }
  back() {
    this.dataService.navigateProfileSearch(null);
  }

  // save($event) {
  //   this.profileService.saveProfileData($event).subscribe((data: any) => {
  //     this.dataService.showMessage(data.message);
  //   });
  // }

  save() {
    this.profileService.saveProfileData(this.profile).subscribe((data: any) => {
      this.profileService.showMessage(data.message);
    });
  }
}
