import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../web-api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private service : WebApiService) {

  }

  ngOnInit(): void {
  }
  Id:any;
  Name:any;
  Marks:any;

  UpdateStudent(){
    var student = new Student();
    student.Id=this.Id;
    student.Name=this.Name;
    student.Marks=this.Marks;

    this.service.updateStudent(student)
    .subscribe((response: any) =>{
      student=response;
      alert('Record Updated');
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

