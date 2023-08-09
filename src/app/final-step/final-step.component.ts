import { Component, OnInit } from '@angular/core';
import { FormServService } from '../form-serv.service';

@Component({
  selector: 'app-final-step',
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.scss'],
})
export class FinalStepComponent  implements OnInit {

  status?:string
  constructor(public formServ:FormServService) {
    this.status = this.formServ.statusRequest
   }

  ngOnInit() {}

}
