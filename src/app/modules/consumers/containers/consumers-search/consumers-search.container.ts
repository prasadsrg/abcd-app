import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../../common/data.service";
import { ConsumerService } from "../../consumer.service";

@Component({
  selector: "app-consumers-search",
  templateUrl: "./consumers-search.container.html"
})

export class ConsumersSearchContainer implements OnInit {
  dataList: any[] = [];
  filter: any = {};
  filterInput: any = {};
  showNav1: boolean = false;
  constructor(
    private dataService: DataService,
    private consumerService: ConsumerService
  ) {
    this.search();
  }

  ngOnInit() {}

  search() {
    this.consumerService.search(this.filter).subscribe((dataList: any[]) => {
      this.dataList = dataList;
    });
  }
  editItem(item: any) {
    if (item) {
      this.dataService.navigateConsumerEdit({ id: item.id });
    } else {
      this.dataService.navigateConsumerEdit({});
    }
  }
  addFilter() {
    this.showNav1 = !this.showNav1;
  }

  filterClose($event: any) {
    this.showNav1 = false;
    if ($event == true) {
      this.filter = Object.assign({}, this.filterInput);
    } else {
      this.filterInput = Object.assign({}, this.filter);
    }
  }
}