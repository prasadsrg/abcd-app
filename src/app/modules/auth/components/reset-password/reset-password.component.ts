import { Component, OnInit, Input } from '@angular/core';
import { User } from "../../../../entities/user";
import { ControlContainer, NgForm } from "@angular/forms";
import { Props } from "../../../../common/props";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ResetPasswordComponent implements OnInit {
@Input() auth: User;
  showorhide: string;
  isVisible: string;
  error: any;
  Props: any = Props;

  constructor() { 
    
  }

  ngOnInit() {
  }
 
resetPassword(){
  
}
}
