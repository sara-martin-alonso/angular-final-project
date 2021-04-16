import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  constructor(public dataService: DataService, public router : Router) {
   
    this.skills = dataService.skills;
    this.isEnglish()
    if(this.eng){
      this.about = dataService.about
      this.education = dataService.education;
    }else if(this.spa){
      this.about = dataService.aboutES
      this.education = dataService.educationES;
    }
    
    this.desactivar  = new Array(this.skills.length).fill(false);
    
  }

  deactivate = false
  deactivateArrows(x){
    if(x){
      this.deactivate = true
     
    }else if(!x){
      this.deactivate = false
    }
  }


desactivar: Array<boolean>
  // DATA
  education: any;
  skills: any;
  about: any;

  //LANGUAGE
  ruta = this.router.url
  spa = false
  eng = true

  isEnglish(){
    if (this.ruta.includes('/es')){
      this.spa =  true
      this.eng = false
      
    }else{
      this.spa = false
      this.eng = true
      
    }
  }

  $ed_row: any = document.getElementsByClassName('education__row');
  $hello: any = document.getElementsByClassName('hello');
  $presentation__left: any = document.getElementsByClassName(
    'presentation__left'
  );
  $presentation__right: any = document.getElementsByClassName(
    'presentation__right'
  );
  $skills__icon: any = document.getElementsByClassName('skills__icon');
  $warn = document.getElementsByClassName('warn');
  $iconTitle = document.getElementsByClassName('title');
  $icon = document.getElementsByClassName('icon');
 
  container = document.getElementsByClassName('container');
  

  
  
  @HostListener('document:scroll')
  swipe() {
    for (const row of this.$ed_row) {
      if (window.pageYOffset >= row.offsetTop / 2) {
        row.classList.add('swipeRight');
      }
      if (window.pageYOffset <= row.offsetTop / 2) {
        row.classList.remove('swipeRight');
      }
    }

    this.swipeUp();
  }
  topScreen = true
  swipeUp() {
    for (const item of this.$hello) {
      if (window.pageYOffset >= item.offsetTop / 4) {
        item.classList.add('swipeUp');
        // this.$warn[0].setAttribute('style', 'display: none');
        this.topScreen = false
      }
      if (window.pageYOffset <= item.offsetTop / 4) {
        item.classList.remove('swipeUp');
      }
    }
    for (const item of this.$presentation__left) {
      if (window.pageYOffset >= item.offsetTop / 3) {
        item.classList.add('swipeUp');
      }
      if (window.pageYOffset <= item.offsetTop / 3) {
        item.classList.remove('swipeUp');
      }
    }
    for (const item of this.$presentation__right) {
      if (window.pageYOffset >= item.offsetTop / 3) {
        item.classList.add('swipeUp');
      }
      if (window.pageYOffset <= item.offsetTop / 3) {
        item.classList.remove('swipeUp');
      }
    }
    if (window.pageYOffset === 0){
      this.topScreen = true
    }
  }



mouseIn(x) {   

  if(!this.desactivar[x]){
    this.desactivar[x] = true
    this.$skills__icon[x].style.color = this.skills[x].color;
    setTimeout(() => {
     
      
      setTimeout(() => {
        this.$icon[x].classList.add('hide');
        this.$iconTitle[x].classList.add('show');
      }, 300);
      this.desactivar[x] = false
    }, 200);
  }

   
  }

  mouseOut(x) {

  if(this.desactivar[x]){
    // this.desactivar[x] = true
    setTimeout(() => {
      setTimeout(() => {
        this.$icon[x].classList.remove('hide');
      }, 300);
      this.$iconTitle[x].classList.remove('show');
    }, 3000);
    
    setTimeout(() => {
      this.$skills__icon[x].style.color = '$darkgrey';
      
    }, 3000);
    this.desactivar[x] = false
  }
   



  }

 
  $arrows = document.getElementsByClassName('arrows')
  $circle__icon = document.getElementsByClassName('fa-circle')

  desactivarCenter = false
  centerButton(){
  if(!this.desactivarCenter){
    this.desactivarCenter = true
    this.deactivateArrows(this.desactivarCenter)
    this.$arrows[0].classList.add('active')
    this.$circle__icon[0].classList.add('active')
    setTimeout(() => {
      this.$arrows[0].classList.add('rotate')
      
     
    }, 400);
    setTimeout(() => {
      this.$arrows[0].classList.remove('active')
      this.$circle__icon[0].classList.remove('active')
    }, 800);
    setTimeout(() => {
      this.$arrows[0].classList.remove('rotate')
      this.desactivarCenter = false
      this.deactivateArrows(this.desactivarCenter)
    }, 801);
  }
  }
  

  // Turn around all skills
  turnAll() {    
    for (let i = 0; i < this.$icon.length; i++) {
      this.$icon[i].classList.remove('hide');
      this.$iconTitle[i].classList.remove('show');
      this.$skills__icon[i].style.color = '$darkgrey';
      setTimeout(() => {
        this.mouseIn(i);
        this.mouseOut(i);
      }, 100);
    }
  }

  // Scroll when Click
 auto
    scrollDown() {    
      this.auto = setInterval(()=>{window.scrollBy(0,100)},100)    
  }
  stopScroll() {
        clearInterval(this.auto)    
  }

  scrollUp() {    
    this.auto = setInterval(()=>{window.scrollBy(0,-100)},100)
    }
  ngOnInit(): void {

    
  }
}
