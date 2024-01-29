import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  sub1 !: Subscription;
  sub2 !: Subscription;
  //message 
  msg1 : unknown;
  msg2 : unknown;

  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    // Ex 01

    const broadCastObs = interval(1000);

    this.sub1 = broadCastObs.pipe(
      //map(data=> console.log("map data=>","video",data)) // if we show only console then console in subs will show undefined
      map(data=> "video " + data ) // here we will  traform data it will not show undefind console of subs
    ).subscribe(res =>{
      // console.log("video ",res); // it is method to subscribe data but it is not recommended way  here we will use Map.
      //  console.log(res); 
       this.msg1 = res;

    })

    setTimeout(()=>{
      this.sub1.unsubscribe()
    }, 5000);

    // Ex 02

    this.sub2 = broadCastObs.pipe(
      map(data => data * 10)
    ).subscribe(res =>{
      // console.log("ex 2",res);
      this.msg2=res;
    })

    setTimeout(()=>{
      this.sub2.unsubscribe();
    }, 5000)

    // Ex 03
    const members = [    //from([{ id:1, name:'2' }]) // it is short method to convert array into obserbvable
      {id: 1, name:'ali'},
      {id: 2, name:'khan'},
      {id: 3, name:'mohsin'},
    ]
    
    let memObs = from(members);

    memObs.pipe(
      map(data => data.name)
    ).subscribe(res => {
      // console.log(res);
      this._designUtilityService.print(res as string, "elContainer")

    })



  }


}
