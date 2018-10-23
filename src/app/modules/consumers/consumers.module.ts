import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";

import { ConsumersRoutingModule } from './consumers-routing.module';
import { MaterialModule } from "../../material.module";

import { ConsumersSearchContainer } from './containers/consumers-search/consumers-search.container';
import { ConsumersEditContainer } from './containers/consumers-edit/consumers-edit.container';
import { ConsumerDetailsComponent } from './components/consumer-details/consumer-details.component';
import { ConsumerAddressComponent } from './components/consumer-address/consumer-address.component';
import { ConsumerProofComponent } from './components/consumer-proof/consumer-proof.component';
import { ConsumerTableComponent } from './components/consumer-table/consumer-table.component';
import { ConsumerFilterComponent } from './components/consumer-filter/consumer-filter.component';
import { ConsumerService } from './consumer.service';




@NgModule({
  imports: [
    CommonModule,
    ConsumersRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [ ConsumersSearchContainer, ConsumersEditContainer,  ConsumerDetailsComponent, ConsumerAddressComponent,
     ConsumerProofComponent,
     ConsumerTableComponent,
     ConsumerFilterComponent ],
     providers: [ ConsumerService ]
})
export class ConsumersModule { }
