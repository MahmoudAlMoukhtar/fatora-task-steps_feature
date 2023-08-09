import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FatoraFormComponent } from './fatora-form/fatora-form.component';

import { FinalStepComponent } from './final-step/final-step.component';
import { ToolsSelctionsComponent } from './tools-selctions/tools-selctions.component';

const routes: Routes = [
  { path: '', redirectTo: 'fatora-form', pathMatch: 'full' },
  { path: 'fatora-form', component: FatoraFormComponent },
  { path: 'tools-selection', component: ToolsSelctionsComponent},
  { path: 'final', component: FinalStepComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
