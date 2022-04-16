import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../../model/users';
import { Observable } from 'rxjs';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

const httpOptions =   {
  headers: new HttpHeaders({'Content-Type' : 'application/json'},)

};




@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  url : string = "http://127.0.0.1:8000/api/register/";
  
 

  

  constructor(
    private formBuilder: FormBuilder,
    private http : HttpClient,
    private router :Router,
  ) { }

  AjouterUtilisateur(user: Users): Observable<any>{
    return this.http.post(this.url,user ,httpOptions)
   }


}
