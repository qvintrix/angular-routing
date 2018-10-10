import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsComponent } from './lessons.component';
import { LessonComponent } from './lesson/lesson.component';
import { EditLessonComponent } from './edit-lesson/edit-lesson.component';
import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsService } from './lessons.service';
import { AuthGuardService } from '../auth-guard.service';
import { LessonResolverService } from './lesson-resolver.service';

@NgModule({
  declarations: [
    LessonsComponent,
    LessonComponent,
    EditLessonComponent
  ],
  imports: [
    CommonModule,
    LessonsRoutingModule
  ],
  providers: [
    LessonsService,
    AuthGuardService,
    LessonResolverService
  ]
})
export class LessonsModule { }
