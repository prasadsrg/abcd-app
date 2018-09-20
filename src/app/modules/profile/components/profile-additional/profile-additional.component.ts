import { Component, OnInit, Input } from '@angular/core';
import { Props } from "../../../../common/props";
import { ControlContainer, NgForm } from "@angular/forms";
import { Profile } from "../../../../entities/profile";


@Component({
  selector: 'app-profile-additional',
  templateUrl: './profile-additional.component.html',
  styleUrls: ['./profile-additional.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm, }]

})
export class ProfileAdditionalComponent implements OnInit {

  Props: any = Props;
  
  constructor() {}

  @Input()
  profile: Profile;
  ngOnInit() {
  }

}
