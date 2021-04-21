import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'driective-demos';
  /* viewMode = "SomethingElse"; */
  //courses = [1,2,3,4];
  /* courses = [
        {id:1 , name: 'course1'},
        {id:2 , name: 'course2'},
        {id:3 , name: 'course3'}
     ];
    onAdd(){
      this.courses.push({id:4,name:'course4'});
    }

    onRemove(course:any){
      let index = this.courses.indexOf(course);
      this.courses.splice(index,1);
    }
    onChange(course:any){
      course.name ="UpdatedName";
    } */
    /* courses:any;
    canSave= true;
    loadCourses(){
       this.courses = [
     {id:1 , name: 'course1'},
     {id:2 , name: 'course2'},
     {id:3 , name: 'course3'}
     ];

    }

    trackCourse(index: any, course:any){
    return course ? course.id : undefined;
 } */

  task={
  title: 'Review applications',
  assignee:{
    name: null
  }
}

}
