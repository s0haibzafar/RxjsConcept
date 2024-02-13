import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {

  subjectData = "Ali" ;

  constructor(private du:DesignUtilityService) { }

  ngOnInit(): void {
    this.du.exclusive.next(true);
    this.du.exclusiveInput.subscribe(res=>{
      this.subjectData = res;
    })
  }

  ngOnDestroy(): void {
    this.du.exclusive.next(false);
  }

}
