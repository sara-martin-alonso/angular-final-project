import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  // ANIMATION RESPONSIVE MENU
  menu = document.getElementsByClassName('nav__ul');
  nav__li = document.getElementsByClassName('nav__li');
  delay;
  button = document.getElementsByClassName('button');

  openMenu() {
    this.menu[0].classList.toggle('open');
    this.button[0].classList.toggle('open');
    this.appearEffect();
  }

  appearEffect() {
    setTimeout(() => {
      for (let i = 0; i < this.nav__li.length; i++) {
        const element = this.nav__li[i];
        element.classList.toggle('open');
        this.delay = 0.1 * i;
        element.setAttribute('style', `transition-delay: ${this.delay}s`);
      }
    }, 250);
  }
 

  

  // ROUTER LANGUAGES
  eng = true;
  spa = false;
  ruta;
  newRoute;
  changeLang(x) {
    if (x === 'spa') {
      this.eng = false;
      this.spa = true;
      if (this.router.url.includes('/es/')) {
      } else {
        this.newRoute = '/es'.concat(this.router.url);
        this.router.navigate([this.newRoute]);
        
        if (window.screen.width <= 1000) {
          // this.menu[0].classList.toggle('open');
          this.appearEffect();
        }
      }
    }
    if (x === 'eng') {
      this.eng = true;
      this.spa = false;
      this.newRoute = this.router.url.replace('/es', '');
      this.router.navigate([this.newRoute]);
      if (window.screen.width <= 1000) {
        // this.menu[0].classList.toggle('open')
        this.appearEffect();
      }
    }
  }
}
