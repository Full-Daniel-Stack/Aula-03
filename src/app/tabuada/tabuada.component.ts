import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css']
})
export class TabuadaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // for (let i = 0; i < 10; i++){
    // var r = [ 5 +" X " + i + " = " + (5*i)]
    // }
    // var i = 0
    // return [console.log(r[i].length)];
    // Foi realizada varias tentativas com for mas nao rolou PROF T_T
  }

  
  
  numero(){
   return[
      5 +" X " + 1 + " = " + (5*1),
      5 +" X " + 2 + " = " + (5*2),
      5 +" X " + 3 + " = " + (5*3),
      5 +" X " + 4 + " = " + (5*4),
      5 +" X " + 5 + " = " + (5*5),
      5 +" X " + 6 + " = " + (5*6),
      5 +" X " + 7 + " = " + (5*7),
      5 +" X " + 8 + " = " + (5*8),
      5 +" X " + 9 + " = " + (5*9),
      5 +" X " + 10 + " = " + (5*10),
  ]
  }
}
