import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur.service';

const httpOptions =   {
  headers: new HttpHeaders({'Content-Type' : 'application/json',
  'X-Requested-With' : 'HttpClient',
  
  
 },)
};

@Component({
  selector: 'ccg-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  url : string = "http://127.0.0.1:8000/api/login";

  data: any;
  form = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private http : HttpClient,
    private router :Router,
    private userService : UtilisateurService
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
    
      email: '',
      password: '',
      
         });
        
}
submit(): void{

  this.data = JSON.stringify(this.form.getRawValue());
  console.log(this.data);
  this.http.post(this.url,this.form.getRawValue(), {withCredentials: true})
  .subscribe( ()=> this.router.navigate(['/priveabonne']));
  
}


}
