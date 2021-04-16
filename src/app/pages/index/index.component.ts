import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor(public router: Router) {
    this.isEnglish();
    
   
    
 
  }
  deactivate = false
  deactivateArrows(x){
    if(x){
      this.deactivate = true
     
    }else if(!x){
      this.deactivate = false
    }
  }

  ruta = this.router.url;
  spa = false;
  eng = true;
  isEnglish() {
    if (this.ruta.includes('/es')) {
      this.spa = true;
      this.eng = false;
    } else {
      this.spa = false;
      this.eng = true;
    }
  }

  ngOnInit(): void {
   
  }

  letter = document.getElementsByClassName('letter__p');
  delay;
  descr = document.getElementsByClassName('letter__h2');


  desactivarDOWN: boolean = false;
  wheelUp($event) {
   
    if (!this.desactivarCenter && !this.desactivarUP && !this.desactivarDOWN )  {
      this.desactivarDOWN = true;
      this.deactivateArrows(this.desactivarDOWN);
      for (let i = 0; i < this.letter.length; i++) {
        const element = this.letter[i];
        this.delay = i * 0.05;
        element.setAttribute(
          'style',
          `animation: rotate 0.5s linear 1 ${this.delay}s`
        );
        setTimeout(() => {
          element.setAttribute('style', `animation: none`);
          this.desactivarDOWN = false;
          this.deactivateArrows(this.desactivarDOWN);
        }, 1200);
      }
    }
    (this.desactivarDOWN)
  }

  desactivarUP: boolean = false;
  wheelDown($event) {
    if (!this.desactivarCenter && !this.desactivarUP && !this.desactivarDOWN )  {
      this.desactivarUP = true;
      this.deactivateArrows(this.desactivarUP);
     
      for (let i = 0; i < this.descr.length; i++) {
        const element = this.descr[i];
        this.delay = i * 0.025;
        element.setAttribute(
          'style',
          `animation: boing 0.5s linear 1 ${this.delay}s`
        );
        setTimeout(() => {
          element.setAttribute('style', `animation: none`);
          this.desactivarUP = false;
          this.deactivateArrows(this.desactivarUP)
        }, 1900);
      }
    }
  }

  @HostListener('document:wheel', ['$event']) effect($event) {
    for (let i = 0; i < this.letter.length; i++) {
      const element = this.letter[i];
      element.classList.add(`letter${i}`);
    }

    // WHEEL UP
    if ($event.deltaY < 0) {
      this.wheelUp($event);
    }

    

    // WHEEL DOWN
    if ($event.deltaY > 0) {
      this.wheelDown($event);
    }
  }


  // CENTER BUTTON
  desactivarCenter: boolean = false;
  centerButton($event) {
    if (!this.desactivarCenter && !this.desactivarUP && !this.desactivarDOWN ) {
      this.desactivarCenter = true;
      this.desactivarUP = true;
      this.desactivarDOWN = true;
      this.deactivateArrows(this.desactivarCenter)

      for (let i = 0; i < this.letter.length; i++) {
        const element = this.letter[i];
        this.delay = i * 0.1;
        element.setAttribute(
          'style',
          `animation: boing 1s linear 1 ${this.delay}s`
        );
        setTimeout(() => {
          element.setAttribute('style', `animation: none`);
          this.desactivarDOWN = false;
        }, 1500);
      }


      for (let i = 0; i < this.descr.length; i++) {
        const element = this.descr[i];
        this.delay = i * 0.025;
        element.setAttribute(
          'style',
          `animation: boing 0.5s linear 1 ${this.delay}s`
        );

        setTimeout(() => {
          element.setAttribute('style', `animation: none`);
          // this.desactivarUP = false;
          this.deactivateArrows(this.desactivarCenter)
        }, 1900);
      }
    }
      this.desactivarCenter = false
      this.desactivarUP = false;
      this.desactivarDOWN = false;
     
  }


  
  
  
 
}

