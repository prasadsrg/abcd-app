import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../../common/data.service";
import { AccessService } from "../../access.service";

@Component({
  selector: "app-access-menu-container",
  templateUrl: "./access-menu.container.html"
})
export class AccessMenuContainer implements OnInit {
  constructor(
    private dataService: DataService,
    private profileService: AccessService
  ) {}

  ngOnInit() {}
}
