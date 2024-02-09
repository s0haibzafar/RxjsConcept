import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {

  @ViewChild('myInput') myInput !: ElementRef;
  reqData = null;
  @ViewChild('myInput2') myInput2 !: ElementRef;
  reqData2 = null;

  constructor() { }
 
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
 
  ngAfterViewInit(): void {
    //Ex 01
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup');

    searchTerm.pipe(
      map((event) => event.target.value),
      debounceTime(1000)
    ).subscribe((r)=>{
      console.log('data' , r);
      this.reqData = r;
      setTimeout(()=>{ this.reqData = null }, 3000)
    })
    //Ex 02
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup');

    searchTerm2.pipe(
      map((event) => event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((r)=>{
      console.log('data' , r);
      this.reqData2 = r;
      setTimeout(()=>{ this.reqData2 = null }, 3000)
    })

  }

}
