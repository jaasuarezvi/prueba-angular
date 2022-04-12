import { Injectable } from '@angular/core';
import { EntityI } from 'src/app/pages/entities/models/entity.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseI } from 'src/app/pages/entities/models/response.interface';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private urlApi = "https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/"

  constructor(private http:HttpClient) { }

  getResponse(id:number):Observable <ResponseI>{
    return this.http.get<ResponseI>(this.urlApi+id.toString());
  }
}
