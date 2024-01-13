import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  count: number;
  obsSubsription !: Subscription;

  constructor(private _designUtilityService: DesignUtilityService) {
    this.count = 0;
   }

  ngOnInit(): void {
    
    // this.obsSubsription = timer(5000,1000).subscribe((value)=>{
    this.obsSubsription = interval(1000).subscribe((value)=>{
      let streamValues = "Video "+ this.count++;
      // console.log(streamValues);
      this._designUtilityService.print(streamValues, 'elContainer')
      this._designUtilityService.print(streamValues, 'elContainer2')
      this._designUtilityService.print(streamValues, 'elContainer3')

      if (this.count > 5 ){
        this.obsSubsription.unsubscribe();
      }
      
    });
  }

}
