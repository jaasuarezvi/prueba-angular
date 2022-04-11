import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SoyYo prueba';
  URI ="https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/1"
  data: any[] = [];



  constructor(
    private http:HttpClient
  ){}

  ngOnInit(){
    this.http.get(this.URI)
    .subscribe((data: any)=> {
      this.data = data;

    })
  }
}
