import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  tasks;
  connectedUser;
  userId;
  constructor() { }

  ngOnInit(): void {
    this.connectedUser = JSON.parse(localStorage.getItem('connectedUser')).id
    console.log(this.connectedUser);
    console.log();
    
    
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    for (let i = 0; i < this.tasks.length; i++) {
      console.log(this.tasks[i].owner);
      this.userId = this.tasks[i].owner
      if (this.tasks) {
      };
    };
  };

  delete(i) {
    this.tasks.splice(i)
    localStorage.setItem('tasks', JSON.stringify(this.tasks))

  }
}
