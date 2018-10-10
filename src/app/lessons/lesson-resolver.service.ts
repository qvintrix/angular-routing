import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { LessonsService } from './lessons.service';
import { Observable } from 'rxjs';
import { Lesson } from './lesson.model';

@Injectable()
export class LessonResolverService implements Resolve<Lesson> {
	constructor(
		private lessonsService: LessonsService
	) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
		Observable<Lesson> | Promise<Lesson> | Lesson {
		return this.lessonsService.getLesson(+route.params['id']);
	}
}
