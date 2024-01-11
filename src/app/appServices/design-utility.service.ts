import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(i: string, containerId: string) {
    let el = document.createElement('p');
    el.innerText = i;

    document.getElementById(containerId)?.appendChild(el);
  }

}
