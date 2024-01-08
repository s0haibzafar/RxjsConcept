import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-npromoise',
  templateUrl: './npromoise.component.html',
  styleUrls: ['./npromoise.component.css']
})
export class NpromoiseComponent implements OnInit {

  constructor() { }

  isDellAvailable(){
    return false;
  }

  isHPAvailable(){
    return false;
  }

  promiseVal:unknown;

  ngOnInit(): void {
    //To create promise
    let buyLaptop = new Promise((resolve, reject)=>{
      // resolve('Promise is resolve!!')
      // reject('Promise is reject!!')
      if(this.isDellAvailable()){
        setTimeout(()=>{
          resolve("Dell is purchased!!")
        },5000)

      }else if(this.isHPAvailable()){
        setTimeout(()=>{
          resolve("HP is purchased!!")
        },3000)
      }else{
        setTimeout(()=>{
          reject("Nothing is purchased!!")
        },2000)
      }
    })

    //to use promise
    buyLaptop.then(res=>{
      console.log("then code ==>", res)
      this.promiseVal = res;
    }).catch(res=>{
      console.log("catch code ==>", res)
      this.promiseVal = res;
    });

    
  }

}
