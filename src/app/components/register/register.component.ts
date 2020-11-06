import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup
  registredUsers = JSON.parse(localStorage.getItem('regUsers')) || []
  id = Math.floor(Math.random()*1000) +1
  constructor(
    private router: Router) {

    this.registrationForm = new FormGroup({
      userId: new FormControl(this.id),
      email: new FormControl('test@test.com',Validators.required),
      password: new FormControl('test', Validators.required),
      confirmPassword: new FormControl('test', Validators.required)
    });
    if (localStorage.getItem('regUsers') || localStorage.getItem('regUsers') !== 'null') {
      this.registredUsers = JSON.parse(localStorage.getItem('regUsers')) || []
    }else{
      this.registredUsers = null
    }
   }

  ngOnInit(): void {
  }

  registerUser() {
    
    if (!this.registrationForm.valid) {
      return
    }else{
      
      this.registredUsers.push(this.registrationForm.value)
      localStorage.setItem('regUsers', JSON.stringify(this.registredUsers));
      this.router.navigate(['/login'])
    }
  }
}
