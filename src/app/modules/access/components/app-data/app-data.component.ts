import { Component, OnInit, Input } from '@angular/core';
import { Props } from "../../../../common/props";
import { ControlContainer, NgForm } from "@angular/forms";
import { AppData } from '../../../../entities/appdata';




@Component({
  selector: 'app-app-data',
  templateUrl: './app-data.component.html',
  styleUrls: ['./app-data.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm, }]

})
export class AppDataComponent implements OnInit {

  Props: any = Props;
  @Input() inputData:any;
  constructor() {}

  @Input()
  appData: AppData;
  ngOnInit() {
  }

}

