import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-log1',
  templateUrl: './log1.component.html',
  styleUrls: ['./log1.component.css']
})
export class Log1Component implements OnInit {
  acno = ""
  pswd = ""
  loginForm = this.fb.group({
  
    acno: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
   
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })
 

  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  acnoChange(event: any) {
    console.log(event);
    this.acno = event.target.value;
    console.log(this.acno);
    
  }
  pswdChange(event: any) {
    console.log(event);
    this.pswd = event.target.value;
    console.log(this.pswd);
    

  }
  login() {
    var acno = this.loginForm.value.acno;
    var pswd = this.loginForm.value.pswd;
    var userdetails = this.ds.userdetails;
    if (this.loginForm.valid) {
      const result = this.ds.login(acno, pswd)
      if (result) {
        alert('login sucessfull');
        this.router.navigateByUrl('dashboard')
      }
      else { alert("login failed") }
    }
    else {
      alert("invalid form")
    }

  }
}
