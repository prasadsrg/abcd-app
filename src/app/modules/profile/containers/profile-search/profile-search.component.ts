import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../../common/data.service";
import { ProfileService } from "../../profile.service";

@Component({
  selector: "app-profile-search",
  templateUrl: "./profile-search.component.html",
  styleUrls: ["./profile-search.component.scss"]
})
export class ProfileSearchComponent implements OnInit {
  dataList: any[] = [];
  filter: any = {};
  filterInput: any = {};
  showNav1: boolean = false;
  constructor(
    private dataService: DataService,
    private profileService: ProfileService
  ) {
    this.search();
  }

  ngOnInit() {}

  search() {
    this.profileService.search(this.filter).subscribe((dataList: any[]) => {
      this.dataList = dataList;
    });
  }
  editItem(item: any) {
    if (item) {
      this.dataService.navigateProfileEdit({ id: item.id });
    } else {
      this.dataService.navigateProfileEdit({});
    }
  }
  addFilter() {
    this.showNav1 = !this.showNav1;
  }

  filterClose($event: any) {
    this.showNav1 = false;
    if ($event == true) {
      this.filter = Object.assign({}, this.filterInput);
    } else {
      this.filterInput = Object.assign({}, this.filter);
    }
  }
}
