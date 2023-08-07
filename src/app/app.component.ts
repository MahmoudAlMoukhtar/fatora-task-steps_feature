import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  currStep:number = 1
  finalStep:number = 3
  constructor(private router:Router) {
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        this.updateCurrStep(event.urlAfterRedirects)
      }
    })
  }

  updateCurrStep(url:string){
    if(url.includes('fatora-form')){
      this.currStep = 1
    }else if(url.includes('tools-selection')){
      this.currStep = 2
    }else if(url.includes('final')){
        this.currStep = 3
    }
  }
  getProgressRatio(){
    return this.currStep /this.finalStep
  }
}
