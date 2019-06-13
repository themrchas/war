import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  queryDataBase() {
    var url;

    var httpHeaderOptions = {
      headers: new HttpHeaders({
        'Accept':'application/json;odata=verbose'
        
      })
    }

    return this.http.get(url,httpHeaderOptions);

  }
}
