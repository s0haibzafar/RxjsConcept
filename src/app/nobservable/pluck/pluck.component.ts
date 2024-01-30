import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

   msg1 !: string[];
   msg2 !: string[];

  constructor() { }

  ngOnInit(): void {

    //Ex 01
    const members = [
      {id:1, name:"Ali"},
      {id:1, name:"khan"},
      {id:1, name:"Mohsin"},
      {id:1, name:"Zain"},
    ]

     from(members).pipe(
      map(data => data.name),
      toArray()
      ).subscribe(res =>{
      this.msg1 = res;
    })
     
    from(members).pipe(
      pluck('name'),
      toArray()
      ).subscribe(res =>{
      this.msg2 = res;
    })

  }

}
