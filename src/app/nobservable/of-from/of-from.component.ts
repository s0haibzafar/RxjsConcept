import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  obsMsg !: {a:string,b:string,c:string};
  constructor(private _designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {

    // of example with single argument
    of("Ali", "Mohsin", "Khan").subscribe((value)=>{
      this._designUtilityService.print(value, "elContainer")
    })

    // of example with object
    of({a:"Ali", b:"Mohsin", c:"Khan"}).subscribe((value)=>{
      this.obsMsg = value;
    })
    
    //Array - From
    from(["Ali","Khan","Mohsin"]).subscribe((value)=>{
      this._designUtilityService.print(value, "elContainer2")
    })

    //Promise - From
    const promise = new Promise(resolve=>{
      setTimeout(()=>{
        resolve('Promise Resolve ')
      },3000)
    })
    

    from(promise).subscribe((value)=>{
      this._designUtilityService.print(value as string, "elContainer3")
    })

    //String - From
    from("for").subscribe((value)=>{
      this._designUtilityService.print(value as string, "elContainer4")
    })
    
  }

}
