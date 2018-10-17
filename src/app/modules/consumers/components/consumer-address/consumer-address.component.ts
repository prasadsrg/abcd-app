import { Component, OnInit, Input } from '@angular/core';
import { Props } from '../../../../common/props';
import { Address } from '../../../../entities/address';
import { ControlContainer, NgForm } from "@angular/forms";


@Component({
  selector: 'app-consumer-address',
  templateUrl: './consumer-address.component.html',
  styleUrls: ['./consumer-address.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]

})
export class ConsumerAddressComponent implements OnInit {

  Props: any = Props;
  @Input()
  address: Address;

  constructor() { }

  ngOnInit() {
  }

}
