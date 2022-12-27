import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser = ""
  currentacno = ""
 

  constructor() {
    this.getdetails();
   }


  savedetails() {
    if (this.userdetails) {
      localStorage.setItem('database', JSON.stringify(this.userdetails))
    }
    if (this.currentUser) { localStorage.setItem('currentUser', JSON.stringify(this.currentUser)) }
    if(this.currentacno){
      localStorage.setItem('currentacno', JSON.stringify(this.currentacno))
    
    }
  }

  getdetails() {
    if (localStorage.getItem('database')) {
      this.userdetails=JSON.parse(localStorage.getItem('database')||"")
    }
    if (localStorage.getItem('currentUser')) {
      this.currentUser=JSON.parse(localStorage.getItem('currentUser')||"")
    }
    if (localStorage.getItem('currentacno')) {
      this.currentacno=JSON.parse(localStorage.getItem('currentacno')||"")
    }
  }




  userdetails: any = {
    "Alan": { acno: "alan3@gmail.com", username: "Alan", password: 1001},
    "rahul": { acno: "rahul4@gmail.com", username: "rahul", password: 1002  },
  
    "bheem": { acno: "bheem9@gmail.com", username: "kannan", password: 1003 }
  }

  signin(acno: any, username: any, password: any) {
    let userdetails = this.userdetails
    if (acno in userdetails) {
      return false;

    }
    else {
      userdetails[acno] = {
        acno,
        username,
        password,
       
      }
      this.savedetails();
      console.log(userdetails);
      return true;
      
    }
  }
  login(acno: any, pswd: any) {
    let userdetails = this.userdetails;
    if (acno in userdetails) {
      if (pswd == userdetails[acno]['password']) {
        this.currentUser = userdetails[acno]['username']
        this.currentacno = acno;
        this.savedetails();
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
 

  }




