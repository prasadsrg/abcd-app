import { Component, OnInit } from "@angular/core";
import { BranchesService } from "../../branches.service";
// import { AppService } from '../../../../shared/service/app.service';
import { DataService } from "../../../../common/data.service";
import { Branch } from "../../../../entities/branch";

@Component({
  selector: "app-branches-edit-container",
  templateUrl: "./branches-edit.container.html"
})
export class BranchesEditContainer implements OnInit {
  branch: Branch = null;

  constructor(
    private dataService: DataService,
    private branchesService: BranchesService
  ) {
    this.branch = new Branch();
    let id = this.dataService.navParam("id");
    if (id) {
      this.entityData(id);
    }
    // if(this.appService.getParam('id')){
    //   this.getBranchData(this.appService.getParam('id'))
  }

  ngOnInit() {}
  entityData(id: any) {
    this.branchesService.entityData(id).subscribe((data: any) => {
      this.branch = data;
      console.log(this.branch);
    });
  }
  back() {
    this.dataService.navigateBranchSearch(null);
  }
  save() {
    this.branchesService.save(this.branch).subscribe((data: any) => {
      this.branchesService.showMessage(data.message);
    });
  }
  getBranchData(data) {
    this.branchesService.entityData(data).subscribe((data: any) => {
      // this.branchesService.showMessage(data.message)
      this.branch = data;
    });
  }
}
