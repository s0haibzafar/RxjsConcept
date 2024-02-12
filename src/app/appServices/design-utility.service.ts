import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  exclusive = new Subject<boolean>();

  constructor() { }

  print(i: string, containerId: string) {
    let el = document.createElement('p');
    el.innerText = i;

    document.getElementById(containerId)?.appendChild(el);
  }

  printLi(i: string, containerId: string) {
    let el = document.createElement('li');
    el.innerText = i;

    document.getElementById(containerId)?.appendChild(el);
  }

}
