import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-toarray',
  templateUrl: './toarray.component.html',
  styleUrls: ['./toarray.component.css']
})
export class ToarrayComponent implements OnInit {
  
  constructor() { }

  user = [
    {name : "Ali ", skill: "Angular" },
    {name : "Khan ", skill: "HTML" },
    {name : "Mohsin ", skill: "JS" },
  ];

  observableSub !: Subscription;  // here we create subscribe to unsubscribe observable
  
  ngOnInit(): void {

    //Ex 01:
    const source = interval(1000);
    // this.observableSub = source.subscribe(res=>{   // Now in below line we use toArray()
    this.observableSub = source.pipe(take(5),toArray()).subscribe(res=>{
      console.log(res);
      
      //when we use toArray then it show error bc data will be in array not a single variable.
       //But how to stope a interval or set condition to stop interval after 8 straams . Now we use take(5)    
      // if(res>=8){
      //   this.observableSub.unsubscribe();
      // } 
    })

    //Ex 02:
    const source2 = from(this.user);

    source2.pipe(toArray()).subscribe(user=>{
      console.log("user", user);
    })

    //Ex 03:
    const source3 = of("One","Two", "Three", "Four");

    source3.pipe(toArray()).subscribe(v=>{
      console.log("Data", v);
    })

  }

}
