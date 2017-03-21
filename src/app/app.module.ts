import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MyGridApplicationComponent} from './my-grid-application/my-grid-application.component';
import {RedComponentComponent} from './red-component/red-component.component';
import {AgGridModule} from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    MyGridApplicationComponent,
    RedComponentComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
    AgGridModule.withComponents(
      [RedComponentComponent]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
