import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  person : any = null;
  fetching: boolean = false;
  status = "No Data";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  getDetails() {
    this.fetching = true;
    this.status = "Fetching Data...";
    this.http.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en').pipe(
        // retry(2)
        retryWhen(e=>e.pipe(
          delay(3000),
          scan((retryCount)=>{
            if(retryCount>2){
              throw e;
            }else{
              retryCount = retryCount + 1;
              console.log("retryCount : ", retryCount);
              this.status = "Retrying Attempt #" + retryCount;
              return retryCount;
            }

          },0)
        ))
      ).subscribe(
        (res) => {
        console.log(res);
        this.person = res;
        this.status = "Data Fetched";
        this.fetching = false;
      },
      (err) => { 
        this.status = "Problem Fetching Data";
        this.fetching = false;
       }
      );
  }

}
