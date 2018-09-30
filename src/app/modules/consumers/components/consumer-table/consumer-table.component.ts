import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-consumer-table',
  templateUrl: './consumer-table.component.html',
  styleUrls: ['./consumer-table.component.scss']
})
export class ConsumerTableComponent implements OnInit {

  @Input()
  inputData: any[] = [];

  @Output()
  outputEmitter: EventEmitter<any> = new EventEmitter<any>();

  scrollList: any;

  constructor() {}

  ngOnInit() {}

  editItem(item: any) {
    this.outputEmitter.emit(item);
  }
}
