import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custome',
  templateUrl: './custome.component.html',
  styleUrls: ['./custome.component.css']
})
export class CustomeComponent implements OnInit, OnDestroy {

  subscribtion !: Subscription;
  subscribtion3 !: Subscription;
  techStatus !: unknown;
  techStatus2 !: unknown;
  techStatus3 !: unknown;
  name !: string; 
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
      // console.log(res);
      this.designUtilityService.printLi(res as string, 'elContainer')
    },
      (error) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = "completed";

      }
    );

    //example 02 (custome)
    const Arr1 = ["ANgular", "React", "JS", ".NEt"];
    const cusObs2 = new Observable(obsever => {

      let count = 0

      setInterval(() => {
        obsever.next(Arr1[count])
        count++;

        if (count > 2) {
          obsever.error();
          // this.techStatus2 = ""
        }

        if (count > 3) {
          obsever.complete();
        }

      }, 1000)
    });

    this.subscribtion = cusObs2.subscribe(res => {
      // console.log(res);
      this.designUtilityService.printLi(res as string, 'elContainer1')
    },
      (error) => {
        this.techStatus2 = 'error';
      },
      () => {
        this.techStatus2 = "completed";

      }

    )

    //example 03 (Random name)
    const Arr2 = ['Ali','Khan','Mohsin', 'Mattar', "Mustakeem", "Zain"];

    const cusObs3 = new Observable(obsever => {

      let count = 0

      setInterval(() => {
        obsever.next(Arr2[count])
        count++;

        if (count > 4) {
          obsever.error(new Error('Limit Exceed 3'));
          // this.techStatus2 = ""
        }

        if (count > 5) {
          obsever.complete();
        }

      }, 1000)
    });

    this.subscribtion3 = cusObs3.subscribe(res => {
      console.log(res);
      this.name=res as string;
    },
      (err) => {
        this.techStatus3 = 'error';
        // console.log(err, this.techStatus3)
      },
      () => {
        this.techStatus3 = "completed";

      }

    )


  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
    this.subscribtion3.unsubscribe();
  }

}
