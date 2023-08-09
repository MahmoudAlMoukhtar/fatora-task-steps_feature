import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IFormCred } from './form-cred.model';
import { FormServService } from './form-serv.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  currStep:number = 1
  finalStep:number = 3
  steps:boolean =true
  
  constructor(private router:Router, private formServ:FormServService) {
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        this.updateCurrStep(event.urlAfterRedirects)
        this.steps = event.urlAfterRedirects.includes("fatora-form") || event.urlAfterRedirects.includes("tools-selection")
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
  
goToNext(event:any) {
  this.formServ.submitClicked=true
  if(this.currStep ==1){
    event.preventDefault();
    // Perform form validation and submit if necessary
    if(this.validateForm()){
      // Navigate to the next step
      this.router.navigate(['/tools-selection']);
    }
  }else if(this.currStep ==2){
    // send request to server side
    this.submitForm()
    // Navigate to the next step
    this.router.navigate(['/final']);
  }
}

validateForm():boolean{
  const checkCompOrProjName = this.formServ.fatoraFormCred.compOrProjName?.trim() == ''
  const checkcompanyCountry = this.formServ.fatoraFormCred.country?.trim() == ''
  const checkcompanyCurrency = this.formServ.fatoraFormCred.currency?.trim() == ''
  if(checkCompOrProjName || checkcompanyCountry || checkcompanyCurrency){
    return false;
  }
  return true
}

submitForm() {
  
  this.formServ.postForm()
}

skip(){
      this.router.navigate(['/final']);
}

}
