import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../web-api.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private service : WebApiService) {

  }
  posts:any;
  ngOnInit(): void {

  }

  GetStudents(){
    this.service.getStudents()
    .subscribe(response => {
    this.posts = response;
    },error=>{
    alert('An unexpected error occured');
    console.log(error);
    })
    }

   }
