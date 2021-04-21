import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../web-api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  constructor(private service : WebApiService) {

  }

  Id:any;
  Name:any;
  Marks:any;

  ngOnInit(): void {
  }

  AddStudent(){
    var student = new Student();
    student.Id=this.Id;
    student.Name=this.Name;
    student.Marks=this.Marks;

    this.service.addStudent(student)
    .subscribe((response: any) =>{
      student=response;
      alert('Record Inserted');
    },error=>{
      alert('An unexpected error occured');
    })
  }

}
class  Student
{
  Id:number | undefined ;
  Name:string | undefined;
  Marks:number | undefined;

}
