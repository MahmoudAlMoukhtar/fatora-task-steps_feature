import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tools-selctions',
  templateUrl: './tools-selctions.component.html',
  styleUrls: ['./tools-selctions.component.scss'],
})
export class ToolsSelctionsComponent  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  
  goToFinalStep() {
  // Perform form validation and submit if necessary

  // Navigate to the next step
  this.router.navigate(['/final-step']);
}

}
