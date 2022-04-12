import { Component, OnInit } from '@angular/core';
import { EntityI } from '../../models/entity.interface';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  entitList: EntityI[] = [];
  checkedList: EntityI[]= [];

  constructor(private dataSvc: ServicesService) { }

  ngOnInit(): void {

    for(let i=0; i<10 ; i++){
      this.dataSvc.getResponse(i).subscribe(data => this.entitList.push(data.data));
    }
  }
  toggleCheckbox(item:EntityI){
    if (this.checkedList.includes(item)) {
      this.checkedList.forEach ((element,index) => {
        if(element == item)  this.checkedList.splice(index,1)
      })
    }else{
      this.checkedList.push(item)
    }
    this.entitList.forEach((element,index) =>{
      element.validate=false;
    } )
  }



}
