import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FatoraFormComponent } from './home/fatora-form/fatora-form.component';
import { FinalStepComponent } from './home/final-step/final-step.component';
import { ToolsSelctionsComponent } from './home/tools-selctions/tools-selctions.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    children:[
      { path: 'form', component: FatoraFormComponent },
  { path: 'service-selection', component: ToolsSelctionsComponent },
  { path: 'final-step', component: FinalStepComponent },
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
