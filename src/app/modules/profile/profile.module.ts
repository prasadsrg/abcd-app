import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileService } from "./profile.service";
import { ProfileSearchComponent } from "./containers/profile-search/profile-search.component";
import { ProfileEditComponent } from "./containers/profile-edit/profile-edit.component";
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "../../material.module";

@NgModule({
  imports: [CommonModule, ProfileRoutingModule, MaterialModule, SharedModule],
  declarations: [ProfileSearchComponent, ProfileEditComponent],
  providers: [ProfileService]
})
export class ProfileModule {}
