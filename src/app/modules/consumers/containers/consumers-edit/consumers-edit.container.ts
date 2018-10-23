import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../../common/data.service";
import { ConsumerService } from "../../consumer.service";

import { Consumer } from "../../../../entities/consumer";

@Component({
  selector: "app-consumers-edit",
  templateUrl: "./consumers-edit.container.html"
})
export class ConsumersEditContainer implements OnInit {
  consumer: Consumer = null;

  constructor(
    private dataService: DataService,
    private cosumerService: ConsumerService
  ) {
    this.consumer = new Consumer();
    let id = this.dataService.navParam("id");
    if (id) {
      this.entityData(id);
    }
  }

  ngOnInit() {}

  entityData(id: any) {
    this.cosumerService.entityData(id).subscribe((data: any) => {
      this.consumer = data;
      console.log(this.consumer);
    });
  }
  back() {
    this.dataService.navigateConsumerSearch(null);
  }

  save() {
    this.cosumerService.save(this.consumer).subscribe((data: any) => {
      this.consumer = data;
    });
  }
}
