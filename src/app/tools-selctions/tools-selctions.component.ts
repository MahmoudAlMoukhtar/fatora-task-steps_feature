import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormServService } from '../form-serv.service';
import { IFormCred } from '../form-cred.model';

@Component({
  selector: 'app-tools-selctions',
  templateUrl: './tools-selctions.component.html',
  styleUrls: ['./tools-selctions.component.scss'],
})
export class ToolsSelctionsComponent  implements OnInit {

  
constructor(private formServ:FormServService) {

}

  ngOnInit() {}


handleCheck(event: any) {
  const value: string = event.target.value;
  const check: boolean = event.target.checked;

  const checkTool = this.formServ.fatoraFormCred.tools?.find((t) => t === value);

  if (check) {
    // Add value to tools if not already present
    if (!checkTool) {
      if (this.formServ.fatoraFormCred.tools){
        this.formServ.fatoraFormCred.tools.push(value);
      }
    }
  } else {
    // Remove value from tools if present
    if (checkTool) {
      if (this.formServ.fatoraFormCred.tools){

        const index = this.formServ.fatoraFormCred.tools.indexOf(value);
        this.formServ.fatoraFormCred.tools.splice(index, 1);
      }
    }
  }

  console.log('from tools', this.formServ.fatoraFormCred);
}


}
