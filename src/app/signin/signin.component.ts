import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  uname = ""
  acno = ""
  pswd = ""
  registerForm = this.fb.group({
    uname: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
   
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })


  constructor( private fb:FormBuilder, private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  
  }
  signin() {
    console.log(this.registerForm);
    console.log(this.registerForm.get('uname')?.errors);
    

    var uname = this.registerForm.value.uname;
    var acno = this.registerForm.value.acno;
    var pswd = this.registerForm.value.pswd;
    if (this.registerForm.valid) {

      const result = this.ds.signin(acno, uname, pswd);
      if (result) {
        alert('sign in sucessfull')
        this.router.navigateByUrl('')
      }
      else {
        alert('user already registered');
        this.router.navigateByUrl('register')
      }

    }
    else {
      alert("invalid form")
    }
  }

}
