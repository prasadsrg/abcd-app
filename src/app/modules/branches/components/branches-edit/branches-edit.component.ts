import { Component, OnInit,Input ,SimpleChanges} from '@angular/core';
import { Branch } from '../../../../entities/branch';
import { ControlContainer, NgForm } from "@angular/forms";


@Component({
  selector: 'app-branches-edit',
  templateUrl: './branches-edit.component.html',
  styleUrls: ['./branches-edit.component.scss']
})
export class BranchesEditComponent implements OnInit {
  @Input() branch: Branch = new Branch();
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() {
    
   }
  ngOnInit() {
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  
  }
  saveEntity(){

  }

  mapReady($event){
   this.branch.lat = $event.coords.lat;
   this.branch.lng = $event.coords.lng;
  }
}
