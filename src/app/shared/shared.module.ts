import { NgModule, ModuleWithProviders, ErrorHandler } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { AppInterceptor } from "./service/app.interceptor";
import { CommonModule } from "@angular/common";
import { ApexService } from "./service/apex.service";
import { ReportService } from "./service/report.service";
import { AppService } from "./service/app.service";
import { HttpService } from "./service/http.service";
import { DataService } from "../common/data.service";
import { MatSnackBarModule, MatProgressBarModule } from "@angular/material";
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
import { ProgressBarComponent } from "./component/progress-bar.component";
import { ErrorsService } from "./service/errors.service";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    InfiniteScrollModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressBarModule
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
    InfiniteListComponent,
    ProgressBarComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
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
    InfiniteListComponent,
    ProgressBarComponent
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
        DataService,
        HttpService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AppInterceptor,
          multi: true
        },
        {
          provide: ErrorHandler,
          useClass: ErrorsService
        }
      ]
    };
  }
}
