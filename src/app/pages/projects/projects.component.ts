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


  ngOnInit(): void {
  }



  
}
