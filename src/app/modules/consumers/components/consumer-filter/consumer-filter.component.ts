import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consumer-filter',
  templateUrl: './consumer-filter.component.html',
  styleUrls: ['./consumer-filter.component.scss']
})
export class ConsumerFilterComponent implements OnInit {

  @Input()
  inputData: any = {};

  constructor() { }

  ngOnInit() {
  }

}
