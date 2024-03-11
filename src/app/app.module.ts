import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHighlightDirective} from "./app-highlight.directive";
import { AppSortingDirective} from "./Sorting.directive";
import { EmpComponent } from './emp/emp.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHighlightDirective,
    AppSortingDirective,
    EmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
