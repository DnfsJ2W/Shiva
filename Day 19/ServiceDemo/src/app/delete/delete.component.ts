import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../web-api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private service : WebApiService) {

  }

  Id:any;
  res:any;
  Marks:any;

  ngOnInit(): void {
  }


  deleteStudent(){
    console.log(this.Id);
    this.service.deleteStudent(this.Id)
    .subscribe((response: any) =>{
      this.res=response;
      alert('Record Delete');
    },error=>{
      alert('An unexpected error occured');
    })
  }

}
