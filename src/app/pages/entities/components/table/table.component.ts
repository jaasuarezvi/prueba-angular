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

  constructor(private dataSvc: ServicesService) { }

  ngOnInit(): void {

    for(let i=0; i<10 ; i++){
      this.dataSvc.getResponse(i).subscribe(data => this.entitList.push(data.data));
    }
  }

}
