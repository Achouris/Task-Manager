import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  savedTasks = JSON.parse(localStorage.getItem('tasks')) || []
  connectedUser = JSON.parse(localStorage.getItem('connectedUser'))
  owner;
  taskForm: FormGroup
  constructor() { 
    this.taskForm = new FormGroup({
      owner: new FormControl(this.owner),
      title: new FormControl(''),
      description: new FormControl('')
    })
  }

  ngOnInit(): void {
    
  this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'))
  }

  postTask() {
    console.log(this.taskForm.value);
    this.taskForm.patchValue({
      owner: this.connectedUser.id
    })
    this.savedTasks.push(this.taskForm.value)
    localStorage.setItem('tasks', JSON.stringify(this.savedTasks))
  }


}
