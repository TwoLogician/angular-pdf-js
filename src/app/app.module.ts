import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgxExtendedPdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
