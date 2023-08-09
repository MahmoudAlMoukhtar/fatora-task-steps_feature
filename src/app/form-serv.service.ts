import { Injectable } from '@angular/core';
import { IFormCred } from './form-cred.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormServService {
  fatoraFormCred: IFormCred = {compOrProjName:"", companyField:"", country: "", currency:"",tools:[]}
  statusRequest:string= "success"
  submitClicked = false
  constructor(private http:HttpClient) { }


  postForm() {
    this.statusRequest = 'wait'
    // Form validation and data capture
    const formData = this.fatoraFormCred;
    // Send form data to the server-side
    /* this.http.post('https://jsonplaceholder.typicode.com/users', formData).subscribe(
      (response) => {
        // Handle success response
        console.log(response);
        this.statusRequest = "success"
        console.log(this.statusRequest);
      },
      (error) => {
        // Handle error response

        console.error(error);
        this.statusRequest = "error"
        console.log(this.statusRequest);
      }
    ); */
    //get request test
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (response) => {
        // Handle success response
        console.log(response);
        this.statusRequest = "success"
        console.log(this.statusRequest);
      },
      (error) => {
        // Handle error response

        console.error(error);
        this.statusRequest = "error"
        console.log(this.statusRequest);
      }
    );
}
}
