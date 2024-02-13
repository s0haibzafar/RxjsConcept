import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  subjectData = "Ali";

  constructor(private du : DesignUtilityService) { }

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
