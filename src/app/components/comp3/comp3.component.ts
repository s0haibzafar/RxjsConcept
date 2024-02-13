import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

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
