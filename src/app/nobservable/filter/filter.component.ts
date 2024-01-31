import { Component, OnInit } from '@angular/core';
import { filter, from, map, toArray } from 'rxjs';

 type Person = {
  id: number;
  name: string;
  gender: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {

  members = [
    { id: 1, name: 'Ali', gender: "Male" },
    { id: 2, name: 'Khani', gender: "Female" },
    { id: 3, name: 'Mohsin', gender: "Male" },
    { id: 4, name: 'Alex', gender: "Female" },
    { id: 5, name: 'Zoey', gender: "Female" },
    { id: 6, name: 'Sajjad', gender: "Male" },
  ];


// data1 !: string;
data1 !: Person[];  //its working  1
data2 !: Person[];
data3 !: Person[];

constructor() { }

ngOnInit(): void {
  const source = from(this.members);
  //Ex 01
  source.pipe(
    // map(d => d.name),
    filter(d => d.name.length >= 5),
    toArray()
  ).subscribe((res) => {
    console.log(res);
    this.data1 = res; // its working  1
    //this.data1 = res.name; // here is problem to resolve it by adding pip(map(res => res.name ))
  });
  //Ex 02
  source.pipe(
    filter(d => d.gender == "Female"),
    toArray()
  ).subscribe((res) => {
    console.log(res);
    this.data2 = res; // its working  1
    //this.data1 = res.name; // here is problem to resolve it by adding pip(map(res => res.name ))
  });
  //Ex 03
  source.pipe(
    filter(d => d.id <= 4),
    toArray()
  ).subscribe((res) => {
    console.log(res);
    this.data3 = res; // its working  1
    //this.data1 = res.name; // here is problem to resolve it by adding pip(map(res => res.name ))
  });
}

}
