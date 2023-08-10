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


constructor(public formServ:FormServService) {
}



ngOnInit() {
}

}
