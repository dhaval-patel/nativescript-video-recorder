import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { PropertyComponent } from "./property/property.component";
import { PreviewComponent } from "./preview/preview.component";

const routes: Routes = [
  { path: "", redirectTo: "property", pathMatch: "full" },
  { path: "property", component: PropertyComponent },
  { path: "preview", component: PreviewComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
