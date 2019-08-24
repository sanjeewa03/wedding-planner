import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { InquiryService } from './inquiry.service';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css'],
  providers: [InquiryService]
})
export class InquiryComponent implements OnInit {

  constructor( private fireStore: AngularFirestore , private inquiryService: InquiryService) { }

  onSubmit(f: NgForm) {
    console.log(f.value);
    const data = f.value;
    this.fireStore.collection('messages').add(data);
    const data2 = { fname: f.value.fname, lname: f.value.lname, email: f.value.email, message: f.value.message };
    console.log(data2);
    this.inquiryService.sendEmail( data2 ).subscribe(
      res => {
        console.log(res);
      }
    );
    f.reset();
  }

  ngOnInit() {
  }

}
