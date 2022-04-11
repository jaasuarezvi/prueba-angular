import { Injectable } from '@angular/core';
import { EntityI } from '../models/entity.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseI } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlApi = "https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/"

  constructor(private http:HttpClient) { }

  getResponse(id:number):Observable <ResponseI>{
    return this.http.get<ResponseI>(this.urlApi+id.toString());
  }

  getEntity(id:number):Observable <EntityI>{

    return this.http.get<EntityI>(this.urlApi+id.toString);
  }
}
