import { Component, OnInit } from '@angular/core';
import { Subscribable, Subscription, interval, map, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {


   myColor : string = '';


  constructor(private du: DesignUtilityService) { }

  ngOnInit(): void {

    //Ex :01
    const arrayName = ['Mohsin', 'khan', 'Ali', 'Qasim', 'Mustaqeem', 'Mathar' ]
    const source = interval(1000)

    let obsSubscribe : Subscription;

    obsSubscribe = source.pipe(
      tap(t => {
        // console.log('tap before', t)
        if(t==6){
           obsSubscribe.unsubscribe(); // here we will perform tab operation 
         }
      }),
      map(data => arrayName[data]
        // if(data==4){
        //   obsSubscribe.unsubscribe(); ----> here if we use unsubs then it will disturbe our code. 
        // }
       ),
      //  tap(t2 => { console.log("tab after ",t2) } )
    ).subscribe(res=>{
      // console.log(res)
      // this.du.print(res as unknown as string, 'dContainer')
      this.du.print(res, 'dContainer')
    })

     //Ex :02
     const arrayColor = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'gray' ]
 
     let obsSubscribe2 : Subscription;
 
     obsSubscribe2 = source.pipe(
       tap(t => {
         this.myColor = arrayColor[t];
         console.log('tap before 2', t, this.myColor )
         if(t==6){
            obsSubscribe2.unsubscribe(); // here we will perform tab operation 
          }
       }),
       map(data => arrayColor[data]),
     ).subscribe(res=>{
       console.log("----------->"+res)
       // this.du.print(res as unknown as string, 'dContainer')
       this.du.print(res, 'dContainer2')
     })

  }

}
