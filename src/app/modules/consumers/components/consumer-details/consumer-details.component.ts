import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, NgForm } from "@angular/forms";
import { Props } from '../../../../common/props';
import { Consumer } from '../../../../entities/consumer';

@Component({
  selector: 'app-consumer-details',
  templateUrl: './consumer-details.component.html',
  styleUrls: ['./consumer-details.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]

})
export class ConsumerDetailsComponent implements OnInit {
  Props: any = Props;

  constructor() { }
   
  @Input()
  consumer: Consumer;

  ngOnInit() {
  }

}
