import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  USER=""

  constructor(private router: Router, private fb: FormBuilder, private ds: DataService) { this.USER = this.ds.currentUser; }

  ngOnInit(): void {
    if (!localStorage.getItem('currentacno')) {
      alert("please login first");
      this.router.navigateByUrl('');
    }
  }

 
  
 
  logout() {
    localStorage.removeItem('currentacno');
    localStorage.removeItem('currentUser')
    this.router.navigateByUrl('')
  }
 


  

}
