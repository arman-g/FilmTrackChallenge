import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { AboutComponent } from "./about/about.component";
import { LightBulbsComponent } from "./tests/lightBulbs.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AboutComponent,
    LightBulbsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: AboutComponent, pathMatch: "full" },
      {
        path: "tests", children:
          [
            { path: "lightBulbs", component: LightBulbsComponent }
          ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
