import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumersRoutingModule } from './consumers-routing.module';
import { ConsumersContainer } from './containers/consumers/consumers.container';
import { ConsumersComponent } from './components/consumers/consumers.component';

@NgModule({
  imports: [
    CommonModule,
    ConsumersRoutingModule
  ],
  declarations: [ConsumersComponent,ConsumersContainer]
})
export class ConsumersModule { }
