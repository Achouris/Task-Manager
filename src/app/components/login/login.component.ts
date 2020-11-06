import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  registredUsers = JSON.parse(localStorage.getItem('regUsers')) || []
  connectedUser = JSON.parse(localStorage.getItem('connectedUser'))
  userId
  constructor(private router: Router) {

    this.loginForm = new FormGroup({
      id: new FormControl(),
      email: new FormControl('test@test.com', Validators.required),
      password: new FormControl('test', Validators.required)
    });
    

    if (localStorage.getItem('connectedUser') || localStorage.getItem('connectedUser') !== 'null') {
      this.registredUsers = JSON.parse(localStorage.getItem('connectedUser')) || []
    }else{
      this.registredUsers = null
    }
   }

  ngOnInit(): void {
  

    this.registredUsers = JSON.parse(localStorage.getItem('regUsers')) || []
    for (let i = 0; i < this.registredUsers.length; i++) {
      this.userId = this.registredUsers[i].userId
 
    }
 
  
}

  login() {
    this.registredUsers = JSON.parse(localStorage.getItem('regUsers')) || []
    for (let i = 0; i < this.registredUsers.length; i++) {
      // console.log('id => ', this.registredUsers[0].userId);
      
      if (this.loginForm.get('email').value == this.registredUsers[i].email && this.loginForm.get('password').value == this.registredUsers[i].password  ) {
        this.loginForm.patchValue({
          id: this.userId
        })
        
         localStorage.setItem('connectedUser', JSON.stringify(this.loginForm.value))
         alert('logged in successfully')    
         this.router.navigate(['/add'])    
        return
      }
      else{
        alert('incorrect email or password')
        return
      }
      
    }
    
  }
}

