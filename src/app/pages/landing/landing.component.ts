import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {Divider} from 'primeng/divider';

@Component({
  standalone:true,
  selector: 'app-landing',
  imports: [
    RouterOutlet,
    Divider
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit{
  router: Router= inject(Router);
  isLoaded: boolean = false;
  ngOnInit(){
    setTimeout(() => {
      this.isLoaded = false;
    },3000)
  }

}
