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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  url : string = "http://127.0.0.1:8000/api/register";

  data: any;
  formregister = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private http : HttpClient,
    private router :Router,
    private userService : UtilisateurService
    ) { }

  ngOnInit(): void {

    this.formregister = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      adresse: '',
      cni :  '',
      prenom : '',
      sexe : '',
      telephone :''
         });
        
}


submit(): void{

  //this.userService.AjouterUtilisateur(this.formregister.getRawValue())
  this.data = JSON.stringify(this.formregister.getRawValue());
  //console.log(this.data);
  this.http.post(this.url,this.data,httpOptions)
  .subscribe(  res =>{this.router.navigate( ['/accueil'])
  });
}

}
