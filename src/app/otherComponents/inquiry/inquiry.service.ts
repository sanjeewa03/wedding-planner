import { Injectable } from '@angular/core';
import { Email } from './inquiry.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  email: Email;
  constructor( private http: HttpClient ) { }

  sendEmail( email: Email ) {
    console.log('inquiry servise send email func.');

    return this.http.post('https://us-central1-weddingplanner-8a961.cloudfunctions.net/sendMail' , email);
  }
}
