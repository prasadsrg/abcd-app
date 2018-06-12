import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppInterceptor } from "./service/app.interceptor";
import { CommonModule } from "@angular/common";
import { ApexService } from "./service/apex.service";
import { ReportService } from "./service/report.service";
import { AppService } from "./service/app.service";
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { FormMessagesComponent } from "./component/form.messages.component";
import { InfiniteListComponent } from "./component/infinite.list.component";

import {
  FilterPipe,
  KeyValuesPipe,
  DecodeURIPipe,
  DatePipe,
  DateTimePipe,
  FlagPipe,
  CurrencyPipe
} from "./utils/pipes";

import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  declarations: [
    FilterPipe,
    KeyValuesPipe,
    DecodeURIPipe,
    DatePipe,
    DateTimePipe,
    FlagPipe,
    CurrencyPipe,
    FormMessagesComponent,
    InfiniteListComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FilterPipe,
    KeyValuesPipe,
    DecodeURIPipe,
    DatePipe,
    DateTimePipe,
    FlagPipe,
    CurrencyPipe,
    FormMessagesComponent,
    InfiniteScrollModule,
    InfiniteListComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ApexService,
        ReportService,
        AppService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AppInterceptor,
          multi: true
        }
      ]
    };
  }
}
