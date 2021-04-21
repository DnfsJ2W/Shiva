import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  private url = "https://localhost:44322/api/Students/";

  constructor(public http: HttpClient) {}

  getStudents(){
    return this.http.get(this.url);

  }
  addStudent(student:any){
    return this.http.post(this.url,student,
      {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })});
  }

  updateStudent(student:any){
    return this.http.put(this.url+student.Id, student,
      {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })});
  }
  deleteStudent(Id:any){
    return this.http.delete(this.url+Id);
  }
  getStudentByIdStudent(Id:any){
    return this.http.get(this.url+Id);
  }
}
