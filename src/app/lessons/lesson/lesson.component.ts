import { Component, OnInit } from '@angular/core';
import { Lesson } from '../lesson.model';
// import { LessonsService } from '../lessons.service';
import { ActivatedRoute, Router, Data } from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  lesson: Lesson;
  constructor(
    // private lessonsService: LessonsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // this.lesson = this.lessonsService.getLesson(+this.route.snapshot.params['id']);

    this.route.data
      .subscribe(
        (data: Data) => {
          this.lesson = data.lesson;
        }
      );
  }

  goToEditLesson() {
    this.router.navigate(['../1/edit'], { relativeTo: this.route });
  }
}
