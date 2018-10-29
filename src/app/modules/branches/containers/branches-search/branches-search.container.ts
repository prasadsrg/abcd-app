import { Component, OnInit } from "@angular/core";
import { BranchesService } from "../../branches.service";
import { DataService } from "../../../../common/data.service";

@Component({
  selector: "app-branches-search-container",
  templateUrl: "./branches-search.container.html"
})
export class BranchesSearchContainer implements OnInit {
  name: any = "abcd";
  dataList: any = [];
  filter: any = {};
  filterInput: any = {};
  showNav1: boolean = false;

  constructor(
    private branchesService: BranchesService,
    private DataService: DataService
  ) {
    this.search();
  }

  ngOnInit() {}
  search() {
    this.branchesService.getbranches(null).subscribe((dataList: any[]) => {
      this.dataList = dataList;
    });
  }
  editItem($event) {
    if ($event) {
      this.DataService.navigateBranchEdit({ id: $event.id });
    } else {
      this.DataService.navigateBranchEdit(null);
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
