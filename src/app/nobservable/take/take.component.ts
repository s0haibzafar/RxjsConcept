import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  constructor(private du:DesignUtilityService) { }

 randomName = ['Mohsin', 'khan', 'Ali', 'Qasim', 'Mustaqeem', 'Mathar' ]

  ngOnInit(): void {

    const nameSource = from(this.randomName);
    //Ex 01
    //  const source = interval(1000).pipe(
    //   take(5)
    //  );

     nameSource.pipe(
      take(4)
     ).subscribe(res=>{
      console.log(res);
      this.du.print(res, 'elContainer');
     })

    //Ex 02

    nameSource.pipe(
      takeLast(3)
     ).subscribe(res=>{
      console.log(res);
      this.du.print(res, 'dlContainer');
     })

    //Ex 03
     const source = interval(1000);
      let condition = timer(6000)
     source.pipe(
      map(r => "Number "+r),
      takeUntil(condition)
     ).subscribe(res=>{
      console.log(res);
      this.du.print(res as unknown as string, 'clContainer');
     })
    //Ex 04
     const source2 = interval(1000);
      let condition2 = fromEvent(document,'click')
     source2.pipe(
      map(r => "Number "+r),
      takeUntil(condition2)
     ).subscribe(res=>{
      console.log(res);
      this.du.print(res as unknown as string, 'flContainer');
     })


  }

}
