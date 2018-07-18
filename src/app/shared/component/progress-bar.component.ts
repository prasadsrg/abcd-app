import { Component } from "@angular/core";
import { ApexService } from "../service/apex.service";

@Component({
  selector: "apex-progress-bar",
  template: `
  <mat-progress-bar 
  color="waring" 
  mode="indeterminate" 
  style="position: fixed; z-index: 9999" 
  *ngIf="showLoading | async">
</mat-progress-bar>
    `,
  styles: [""]
})
export class ProgressBarComponent {
  showLoading: any;
  constructor(private apexService: ApexService) {
    this.showLoading = this.apexService.loaderEvent();
  }
}
