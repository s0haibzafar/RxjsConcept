import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custome',
  templateUrl: './custome.component.html',
  styleUrls: ['./custome.component.css']
})
export class CustomeComponent implements OnInit {

  techStatus !: unknown;
  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    //example 01 (Mannual)
    const cusObs1 = new Observable(observer => {

      setTimeout(() => {
        observer.next('Angular');
      }, 1000)

      setTimeout(() => {
        observer.next('React');
        // observer.complete();
      }, 2000)

      setTimeout(() => {
        observer.next('Typescript');
        observer.error(new Error('Limit Exceed 3'))
        // this.techStatus = 'error';
      }, 3000)

      setTimeout(() => {
        observer.next('Node');
      }, 4000)

      setTimeout(() => {
        observer.next('Ruby');
        // observer.complete()
        // this.techStatus = "completed";
      }, 5000)
      // observer.error()
      // observer.complete()
    });

    cusObs1.subscribe(res => {
      console.log(res);
      this.designUtilityService.printLi(res as string, 'elContainer')
    },
    (error)=>{
        this.techStatus = 'error';
    },
    ()=>{
      this.techStatus = "completed";

    }
    );
  }

}
