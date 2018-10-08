import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit {

  allowEdit = false;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);

    this.route.queryParams
      .subscribe(queryParams => {
        +queryParams.allowEdit ? this.allowEdit = true : this.allowEdit = false;
        console.log(this.allowEdit);
      });
  }

}
