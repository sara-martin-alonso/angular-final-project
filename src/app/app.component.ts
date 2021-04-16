import { Component, HostListener, Output} from '@angular/core';
import { EventEmitter } from 'events';
import { DataService } from '../app/service/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio'
  mouseTop: any 
  mouseLeft: any 
  ancho : any

  mouse: any = document.getElementsByClassName('mouse');
 raton: any = document.getElementsByClassName('raton');
  @HostListener('document:mousemove', ['$event'])
  onMousemove($event) {
    this.mouseTop = $event.clientY - this.ancho / 2
    this.mouseLeft = $event.clientX - this.ancho / 2
    this.ancho = this.mouse[0].offsetWidth
  }


  activeMouse(){
    this.raton[0].classList.add('active')
  }
  inactiveMouse(){
    this.raton[0].classList.remove('active')
  }
 
  
}
