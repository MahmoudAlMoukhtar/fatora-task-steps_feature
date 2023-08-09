import { Component, OnInit } from '@angular/core';
import { IFormCred } from '../form-cred.model';
import { FormServService } from '../form-serv.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fatora-form',
  templateUrl: './fatora-form.component.html',
  styleUrls: ['./fatora-form.component.scss'],
})
export class FatoraFormComponent  implements OnInit {

  fatoraFormCred?:IFormCred

constructor(public formServ:FormServService, private http:HttpClient) {
   this.fatoraFormCred = formServ.fatoraFormCred
}

// handleInput(event:any){
//   const name:string = event.target.name
//   const value:string = event.target.value
//   switch(name){
//     case "compOrProjName":
//       this.fatoraFormCred.compOrProjName = value;
//       break;
//     case "companyField":
//       this.fatoraFormCred.companyField = value;
//       break;
//     case "country":
//       this.fatoraFormCred.country = value;
//       break;
//     case "currency":
//       this.fatoraFormCred.currency = value;
//       break;
//   }
//   console.log(this.fatoraFormCred)
// }

ngOnInit() {
}

}
