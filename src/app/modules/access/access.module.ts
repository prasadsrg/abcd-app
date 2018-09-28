import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { AppDataContainer } from './containers/app-data/app-data.container';
import { AccessMenuContainer } from './containers/access-menu/access-menu.container';
import { FormMessagesComponent } from '../../shared/component/form.messages.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "../../material.module";
import { AccessService } from './access.service';
import { AppDataComponent } from './components/app-data/app-data.component';
import  { AccessMenuComponent } from './components/access-menu/access-menu.component'

@NgModule({
  imports: [
    CommonModule,
    AccessRoutingModule,
    SharedModule,
    MaterialModule
  ],
  declarations: [AppDataContainer, AccessMenuContainer,AppDataComponent,AccessMenuComponent],
  providers:[AccessService]
})
export class AccessModule { }
