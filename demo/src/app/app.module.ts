import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptFormsModule,
  NativeScriptCommonModule,
  NativeScriptModule,
  registerElement,
} from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PropertyComponent } from "./property/property.component";
import { PreviewComponent } from "./preview/preview.component";

// Register VideoView element for camera view
var VideoView = require("nativescript-video-recorder/video-recorder").VideoView;
registerElement("VideoView", () => {
  return <any>VideoView;
});

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptCommonModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, PropertyComponent, PreviewComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
