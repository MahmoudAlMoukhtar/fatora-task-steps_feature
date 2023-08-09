import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { FatoraFormComponent } from './fatora-form/fatora-form.component';
import { FinalStepComponent } from './final-step/final-step.component';
import { ToolsSelctionsComponent } from './tools-selctions/tools-selctions.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,FatoraFormComponent,ToolsSelctionsComponent,FinalStepComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
