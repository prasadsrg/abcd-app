import { Component, OnInit } from '@angular/core';
import { BranchesService } from '../../branches.service';
import { AppService } from '../../../../shared/service/app.service';
import { Branch } from '../../../../entities/branch';



@Component({
  selector: 'app-branches-edit-container',
  templateUrl: './branches-edit.container.html'
})
export class BranchesEditContainer implements OnInit {
  branch:Branch = null
  constructor(private branchesService:BranchesService,private appService:AppService) { 
    this.branch = new Branch();
    if(this.appService.getParam('id')){
      this.getBranchData(this.appService.getParam('id'))
    }
  }

  ngOnInit() {

  }
  back(){
    this.appService.navigate('/branches',[])
}
  save(){
    this.branchesService.save(this.branch).subscribe((data: any) => {
      this.branchesService.showMessage(data.message)
    })
  }
getBranchData(data){
  this.branchesService.entity(data).subscribe((data: any) => {
    // this.branchesService.showMessage(data.message)
  this.branch = data;
  })
}
}
