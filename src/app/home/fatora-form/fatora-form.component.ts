import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fatora-form',
  templateUrl: './fatora-form.component.html',
  styleUrls: ['./fatora-form.component.scss'],
})
export class FatoraFormComponent  implements OnInit {

  constructor(private router:Router) { 

  }

  ngOnInit() {}


  goToServiceSelection() {
  // Perform form validation and submit if necessary

  // Navigate to the next step
  this.router.navigate(['/service-selection']);
}

}
