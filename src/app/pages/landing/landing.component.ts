import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {Divider} from 'primeng/divider';
import {ButtonDirective} from 'primeng/button';
import {Ripple} from 'primeng/ripple';

@Component({
  standalone:true,
  selector: 'app-landing',
  imports: [
    RouterOutlet,
    Divider,
    ButtonDirective,
    Ripple
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit{
  router: Router= inject(Router);
  isLoaded: boolean = false;
  ngOnInit():void {
    setTimeout(() => {
      this.isLoaded = false;
    },3000)
  }

}
