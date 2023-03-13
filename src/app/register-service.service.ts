import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Authentication } from './authentication';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http:HttpClient) { }

  apiurl='http://localhost:5001/api/v1';


getCountry():Observable<any>{
  return this.http.get<any>(this.apiurl+'/fetchCountries',{responseType: 'test' as 'json'})
}
getState(code:any):Observable<any>{
  return this.http.get<any>(this.apiurl+'/fetchStatesByCountryCode'+'/'+code,{responseType: 'text' as 'json'})
}

addRegistration(register:Register):Observable<any>{
  return this.http.post<any>(this.apiurl+'/addRegistration',register,{responseType: 'text' as 'json'})
}

login(authentication:Authentication):Observable<any>{
  return this.http.post<any>(this.apiurl+'/authenticate',authentication,{responseType:'text' as 'json'})
}

}
