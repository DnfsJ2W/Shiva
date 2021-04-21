import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../web-api.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent implements OnInit {


  ngOnInit(): void {
  }
  constructor(private service : WebApiService) {

  }

  Id:any;
  Name:any;
  Marks:any;
  student:any;

  GetStudentById(){
    this.service.getStudentByIdStudent(this.Id)
    .subscribe((response: any) =>{
      let {Name, Marks}=response;
      this.Name=Name;
      this.Marks=Marks;
    },error=>{
      alert('An unexpected error occured');
    })
  }

}
