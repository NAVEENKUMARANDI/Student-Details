import { Component, OnInit } from '@angular/core';
import { studentObjects } from '../studentsobject';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList = studentObjects;
  constructor() { }

  ngOnInit() {
  }

}
