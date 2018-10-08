import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LessonComponent } from './lesson/lesson.component';
import { EditLessonComponent } from './edit-lesson/edit-lesson.component';
import { LessonsComponent } from './lessons.component';

const routes: Routes = [
  { path: '', component: LessonsComponent },
  { path: ':id', component: LessonComponent },
  { path: ':id/edit', component: EditLessonComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class LessonsRoutingModule { }
