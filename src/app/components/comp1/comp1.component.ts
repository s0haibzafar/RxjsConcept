import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  subjectData = "Ali";

  constructor(private du : DesignUtilityService ) { }

  ngOnInit(): void {
    this.du.exclusiveInput.subscribe(res=>{
      this.subjectData = res;
    })
  }

  changeSubject(inputValue : any){
    this.du.exclusiveInput.next(inputValue.value);
    this.subjectData = inputValue.value;
  }

}
