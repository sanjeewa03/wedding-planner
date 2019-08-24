import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  data = [
    {title: 'Sri Lanka' , image: '../../../assets/images/destinations/srilanka.jpg' },
    {title: 'India' , image: '../../../assets/images/destinations/india.jpg'},
    {title: 'Australia' , image: '../../../assets/images/destinations/australia.jpg'},
    {title: 'England' , image: '../../../assets/images/destinations/england.jpg'},
  ];
  constructor() { }

  ngOnInit() {
  }


}
