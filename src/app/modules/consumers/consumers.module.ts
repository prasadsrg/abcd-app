import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";

import { ConsumersRoutingModule } from './consumers-routing.module';
import { MaterialModule } from "../../material.module";

import { ConsumersContainer } from './containers/consumers/consumers.container';
import { ConsumersComponent } from './components/consumers/consumers.component';

@NgModule({
  imports: [
    CommonModule,
    ConsumersRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [ConsumersComponent,ConsumersContainer]
})
export class ConsumersModule { }
