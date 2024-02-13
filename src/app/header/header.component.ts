import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  exclusive :boolean = false;

  constructor(private du : DesignUtilityService) { }

  ngOnInit(): void {
    this.du.exclusive.subscribe(data=>{
      this.exclusive = data;
    })
  }

}
