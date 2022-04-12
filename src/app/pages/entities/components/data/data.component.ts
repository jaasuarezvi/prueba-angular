import { Component, Input, OnInit } from '@angular/core';
import { EntityI } from '../../models/entity.interface';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  edit: boolean=  false;
  @Input() checkedList:EntityI[] = []


  constructor() { }

  ngOnInit(): void {
  }

  sortDec(data:any){
    data = data?.sort((a: { name: any; },b: { name: any; })=>{
      const  x = (a.name || "").length >0 ? a.name: "a"
      const  y = (b.name || "").length >0 ? b.name: "a"
      if (x< y) return -1;
      if (x> y) return 1;
      else return 0;
    }  )
    console.log(data)
    return data
  }


  sortAsc(data:any){
    data = data?.sort((a: { name: any; },b: { name: any; })=>{
      const  x = (a.name || "").length >0 ? a.name: "a"
      const  y = (b.name || "").length >0 ? b.name: "a"
      if (x< y) return 1;
      if (x> y) return -1;
      else return 0;
    }  )
    console.log(data)
    return data
  }

  toggleEditable(entity:EntityI){

    entity.validate = !entity.validate
    //TODO on false
    console.log(this.edit)
  }

  prueba(data:String){
    console.log(data)
  }

}
