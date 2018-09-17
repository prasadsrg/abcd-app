import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileService } from "./profile.service";
import { ProfileSearchComponent } from "./containers/profile-search/profile-search.component";
import { ProfileEditComponent } from "./containers/profile-edit/profile-edit.component";
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "../../material.module";
import { ProfileTableComponent } from './components/profile-table/profile-table.component';
import { ProfileFilterComponent } from './components/profile-filter/profile-filter.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfileAddressComponent } from './components/profile-address/profile-address.component';
import { ProfileActiveComponent } from './components/profile-active/profile-active.component';
import { ProfileAdditionalComponent } from './components/profile-additional/profile-additional.component';

@NgModule({
  imports: [CommonModule, ProfileRoutingModule, MaterialModule, SharedModule],
  declarations: [ProfileSearchComponent, ProfileEditComponent, ProfileTableComponent, ProfileFilterComponent, ProfileDetailsComponent, ProfileAddressComponent, ProfileActiveComponent, ProfileAdditionalComponent],
  providers: [ProfileService]
})
export class ProfileModule {}
