import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(public router: Router, public dataService : DataService) {
    this.isEnglish();
    this.rrssData = dataService.rrssData;
  }

  deactivate = false
  deactivateArrows(x){
    if(x){
      this.deactivate = true
     
    }else if(!x){
      this.deactivate = false
    }
  }

  rrssData : Array<object>;
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
  ngOnInit(): void {}

  letter = document.getElementsByClassName('letter__h2');
  email = document.getElementsByClassName('letter__email');
  rrss = document.getElementsByClassName('rrss__li');
  delay;

  desactivar: boolean = false;
  wheelDown() {
    if (!this.desactivar) {
      this.desactivar = true;
      this.deactivateArrows(this.desactivar)

      for (let i = 0; i < this.rrss.length; i++) {
        const element = this.rrss[i];

        this.delay = i * 0.05;

        element.setAttribute(
          'style',
          `animation: rotateY 0.6s linear 1 forwards ${this.delay}s`
        );

        setTimeout(() => {
          element.setAttribute('style', `animation: none`);
          this.desactivar = false;
          this.deactivateArrows(this.desactivar)
        }, 1000);
      }
    }
  }
  // CENTER BUTTON
  desactivarCenter: boolean = false;

  $duration  
  $totalTime 
  $itemDelay


 
  wheelUp() {
    if (!this.desactivarCenter) {
      this.desactivarCenter = true;
      this.deactivateArrows(this.desactivarCenter)

      for (let i = 0; i < this.letter.length; i++) {
        const element = this.letter[i];
        this.delay = i * 0.20;
        element.setAttribute(
          'style',
          `animation: circle 0.4s linear 1 ${this.delay}s`
        );
        setTimeout(() => {
          element.setAttribute('style', `animation: none`);
          this.desactivarCenter = false;
          this.deactivateArrows(this.desactivarCenter)
        }, 2000);
      }
    }
  }

  centerButton() {
    if (!this.desactivar) {
      this.desactivar = true;
      this.deactivateArrows(this.desactivar)
      for (let i = 0; i < this.email.length; i++) {
        const element = this.email[i];
        this.delay = i * 0.025;
        element.setAttribute(
          'style',
          `animation: scale 0.5s linear 1 ${this.delay}s`
        );
        setTimeout(() => {
          element.setAttribute('style', `animation: none`);
          this.desactivar = false;
          this.deactivateArrows(this.desactivar)
        }, 1400);
      }
    }
  }

  @HostListener('document:wheel', ['$event'])
  effect($event) {
    for (let i = 0; i < this.letter.length; i++) {
      const element = this.letter[i];
    }

    // WHEEL UP
    if ($event.deltaY < 0) {
      this.wheelUp();
    }

    // WHEEL DOWN
    if ($event.deltaY > 0) {
      this.wheelDown();
    }
  }
}
