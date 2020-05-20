import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BioService {
  private url= ''
  
  constructor(private http: HttpClient){ }
  getBioList(): Observable<any>{
    return this.http.get(`${this.url}`);
  }
  bioAdd(Bio: Object):Observable<object>{
    const addObj= this.http.post(`${this.url}`,Bio);
    console.log('response add object');
    console.log(addObj.subscribe(data => console.log(data)));
    return addObj;
  }
  getBio(id:number): Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
}
