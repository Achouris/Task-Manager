import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { title } from 'process';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  tasks: Task[];
  editedForm: FormGroup;

  get tasksControl() {
    const tasksArray: FormArray = this.editedForm.get('tasks') as FormArray;
    return tasksArray.controls;
  }

  constructor(private fb: FormBuilder) {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.editedForm = this.fb.group({
      tasks: this.fb.array([])
    });
  }

  ngOnInit(): void {
    console.log(this.tasks);
    this.tasks.forEach((value: Task) => {
      const tasksForm: FormArray = this.editedForm.get('tasks') as FormArray;
      tasksForm.push(this.fb.group({
        owner: value.owner,
        title: value.title,
        description: value.description
      }));
    });
  }

  edit(i) {
    const tasksArray: FormArray = this.editedForm.get('tasks') as FormArray;
    this.tasks[i] = tasksArray.value[i];
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }


}

