import { stringify } from '@angular/compiler/src/util';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor(public dataService: DataService, public router : Router) {

    if(this.router.url.includes('/es/')){
      this.projects = dataService.projectsES;
      this.projectsTexts = dataService.projectsTextES;
    }else{
      this.projects = dataService.projects;
      this.projectsTexts = dataService.projectsText;
    }

  
  }
  deactivate = false
  deactivateArrows(x){
    if(x){
      this.deactivate = true
     
    }else if(!x){
      this.deactivate = false
    }
  }

    projectsTexts
  projects: Array<object>;
  article = document.getElementsByClassName('article');
  circles = document.getElementsByClassName('circle');
  slider = document.getElementsByClassName('circles__grande');
  image = document.getElementsByClassName('article__img');
  texts = document.getElementsByClassName('article__texts');
  width 
  length = this.circles.length;


  

 maintain(i){   
    this.texts[i].classList.toggle('show')
    this.image[i].classList.toggle('show')
   
  }

  // mouseIn(x) {   

  //   if(!this.desactivar[x]){
  //     this.desactivar[x] = true
  //   
  //            
  //       setTimeout(() => {
  //         this._______.classList.add('_______');
  //       }, 300);
  //       this.desactivar[x] = false
  //   }
  
     
  //   }
  
 
     
  
  
  
  //   }
  

  

//   setUp(){
//     console.log('i')
//    for (let i = 0; i < this.article.length; i++) {
//      const element = this.article[i];
//      element.setAttribute('style', 'color:red')
//    }
//  }

 


// @HostListener('document:wheel', ['$event']) appear($event) {
   
  // }

  ngOnInit(): void {
  }


  // foto: number = 0;
  // sum(){
  //   this.wheelUp()
  // }
  // hide(x) {
  //   this.image[x].classList.remove('center');
  //   this.texts[x].classList.remove('center');
  //   this.circles[x].classList.remove('active');
  // }
  // show(x) {
  //   this.image[x].classList.add('center');
  //   this.texts[x].classList.add('center');
  //   this.circles[x].classList.add('active');
  // }

  // wheelUp(){
  //   if (this.foto === this.texts.length - 1) {
  //     this.hide(this.foto);
  //     this.foto = 0;
  //     this.show(this.foto);
  //   } else {
  //     this.hide(this.foto);
  //     this.foto++;
  //     this.show(this.foto);
  //   }
  // }
  // wheelDown(){
  //   this.hide(this.foto);
  //   this.foto--;

  //   if (this.foto < 0) {
  //     this.foto = this.texts.length - 1;
  //   }
  //   this.show(this.foto);
  // }

  
}
