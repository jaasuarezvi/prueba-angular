import { Component, OnInit } from '@angular/core';
import { EntityI } from '../models/entity.interface';
import { ResponseI } from '../models/response.interface';
import { DataService } from './data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  entitList: EntityI[] = [];

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {

    for(let i=0; i<10 ; i++){
      //this.dataSvc.getResponse(i).subscribe(data => console.log(data));
      this.dataSvc.getResponse(i).subscribe(data => this.entitList.push(data.data));
      //console.log(this.entitList);
    }
    console.log(this.entitList);

  }

}
