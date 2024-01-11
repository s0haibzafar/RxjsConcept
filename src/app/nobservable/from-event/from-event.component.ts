import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addBtn') addBtn!:ElementRef ;

  
  constructor(private _designUtilityService: DesignUtilityService) {
   }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((data)=>{
      let value  = 'Video '+ count++; 
      // console.log(value);
      this._designUtilityService.print(value, 'elContainer');
      this._designUtilityService.print(value, 'elContainer2');
    });
  }

 


}
