import { Component, OnInit } from '@angular/core';
import { Lesson } from './lesson.model';
import { LessonsService } from './lessons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  lessons: Lesson[];
  constructor(
    private lessonsService: LessonsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.lessons = this.lessonsService.getLessons();
  }

}
