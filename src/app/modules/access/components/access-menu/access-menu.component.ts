import { Component, OnInit, Input, Output } from '@angular/core';
import { Props } from "../../../../common/props";
import { ControlContainer, NgForm } from "@angular/forms";
import { AccessMenu } from '../../../../entities/accessmenu';



@Component({
  selector: 'app-access-menu',
  templateUrl: './access-menu.component.html',
  styleUrls: ['./access-menu.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm, }]

})
export class AccessMenuComponent implements OnInit {

  Props: any = Props;
  @Input() inputData:any;
  
  constructor() {
   
  }

  @Input()
  accessMenu: AccessMenu;
  
  ngOnInit() {
  
  }
 

}
