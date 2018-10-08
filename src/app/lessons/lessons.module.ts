import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsComponent } from './lessons.component';
import { LessonComponent } from './lesson/lesson.component';
import { EditLessonComponent } from './edit-lesson/edit-lesson.component';
import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsService } from './lessons.service';

@NgModule({
  imports: [
    CommonModule,
    LessonsRoutingModule
  ],
  declarations: [
    LessonsComponent,
    LessonComponent,
    EditLessonComponent
  ]
})
export class LessonsModule { }
