import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emitters/emitters';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

message = ""
  constructor(
    private http : HttpClient

  ) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/api/user',{withCredentials:  true}).subscribe(
     
      (res: any) =>{
        
        this.message = 'Hi  ' +res.prenom
        Emitters.authEmitter.emit(true)
        console.log(res);
      },
      err =>{
        this.message = 'Vous n etes pas connecter';
        Emitters.authEmitter.emit(true)
      }
    );
  }

}
