import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-deals',
  templateUrl: './wedding-deals.component.html',
  styleUrls: ['./wedding-deals.component.css']
})
export class WeddingDealsComponent implements OnInit {
  public cardForSection = 4;
  public noOfSections = 2;
  public visibleImages = [
    // tslint:disable-next-line: max-line-length
    { id : 'Gall Face Hotel' , price: '2500$' , category : 'Collombo' , header : '' , title : 'Gall Face Hotel' , l1 : '7.293180' , l2 : '80.637026' , caption : 'View from a boat Our Driver Guide will be your hotel lobby at 07:00 a.m. Pick up from the hotel and proceed to Peradeniya with by, air-conditioned vehicle. Our First visit Peradeniya Botanical Garden' , url : 'assets/images/gallFaceHotel.jpg' } ,
    // tslint:disable-next-line: max-line-length
    { id : 'GaladariHotel' , price: '2500$' , category : 'Colombo' , header : '' , title : 'GaladariHotel' , l1 : '7.293180' , l2 : '80.637026' , caption : 'View from a boat Our Driver Guide will be your hotel lobby at 07:00 a.m. Pick up from the hotel and proceed to Peradeniya with by, air-conditioned vehicle. Our First visit Peradeniya Botanical Garden' , url : 'assets/images/galadariHotel.jpg' } ,
    // tslint:disable-next-line: max-line-length
    { id : 'Kingbury Hotel' , price: '2500$' , category : 'Colombo' , header : '' , title : 'Kingbury Hotel' , l1 : '7.293180' , l2 : '80.637026' , caption : 'View from a boat Our Driver Guide will be your hotel lobby at 07:00 a.m. Pick up from the hotel and proceed to Peradeniya with by, air-conditioned vehicle. Our First visit Peradeniya Botanical Garden' , url : 'assets/images/kingsburyHotel.jpg' } ,
    // tslint:disable-next-line: max-line-length
    { id : 'Cinnaman Grand Hotel' , price: '2500$' , category : 'Colombo' , header : '' , title : 'Cinnaman Grand Hotel' , l1 : '7.293180' , l2 : '80.637026' , caption : 'View from a boat Our Driver Guide will be your hotel lobby at 07:00 a.m. Pick up from the hotel and proceed to Peradeniya with by, air-conditioned vehicle. Our First visit Peradeniya Botanical Garden' , url : 'assets/images/cinamanGrandHotel.jpg' } ,
    // tslint:disable-next-line: max-line-length
    { id : 'Hotel Mout Lavinia' , price: '2500$' , category : 'galle' , header : '' , title : 'Hotel Mout Lavinia' , l1 : '7.293180' , l2 : '80.637026' , caption : 'View from a boat Our Driver Guide will be your hotel lobby at 07:00 a.m. Pick up from the hotel and proceed to Peradeniya with by, air-conditioned vehicle. Our First visit Peradeniya Botanical Garden' , url : 'assets/images/gallFaceHotel.jpg' } ,
    // tslint:disable-next-line: max-line-length
    { id : 'Gall Face Hotel' , category : 'Collombo' , header : '' , title : 'Gall Face Hotel' , l1 : '7.293180' , l2 : '80.637026' , caption : 'View from a boat Our Driver Guide will be your hotel lobby at 07:00 a.m. Pick up from the hotel and proceed to Peradeniya with by, air-conditioned vehicle. Our First visit Peradeniya Botanical Garden' , url : 'assets/images/gallFaceHotel.jpg' } ,
    // tslint:disable-next-line: max-line-length
    { id : 'GaladariHotel' , category : 'Colombo' , header : '' , title : 'GaladariHotel' , l1 : '7.293180' , l2 : '80.637026' , caption : 'View from a boat Our Driver Guide will be your hotel lobby at 07:00 a.m. Pick up from the hotel and proceed to Peradeniya with by, air-conditioned vehicle. Our First visit Peradeniya Botanical Garden' , url : 'assets/images/galadariHotel.jpg' } ,
    // tslint:disable-next-line: max-line-length
    { id : 'Kingbury Hotel' , category : 'Colombo' , header : '' , title : 'Kingbury Hotel' , l1 : '7.293180' , l2 : '80.637026' , caption : 'View from a boat Our Driver Guide will be your hotel lobby at 07:00 a.m. Pick up from the hotel and proceed to Peradeniya with by, air-conditioned vehicle. Our First visit Peradeniya Botanical Garden' , url : 'assets/images/kingsburyHotel.jpg' } ,
    // tslint:disable-next-line: max-line-length
    { id : 'Cinnaman Grand Hotel' , category : 'Colombo' , header : '' , title : 'Cinnaman Grand Hotel' , l1 : '7.293180' , l2 : '80.637026' , caption : 'View from a boat Our Driver Guide will be your hotel lobby at 07:00 a.m. Pick up from the hotel and proceed to Peradeniya with by, air-conditioned vehicle. Our First visit Peradeniya Botanical Garden' , url : 'assets/images/cinamanGrandHotel.jpg' } ,
    // tslint:disable-next-line: max-line-length
    { id : 'Hotel Mout Lavinia' , category : 'galle' , header : '' , title : 'Hotel Mout Lavinia' , l1 : '7.293180' , l2 : '80.637026' , caption : 'View from a boat Our Driver Guide will be your hotel lobby at 07:00 a.m. Pick up from the hotel and proceed to Peradeniya with by, air-conditioned vehicle. Our First visit Peradeniya Botanical Garden' , url : 'assets/images/gallFaceHotel.jpg' }

];
public visibleImages1 = this.visibleImages.slice(0, 4);
public visibleImages2 = this.visibleImages.slice(0, 4);
  constructor() { }

  ngOnInit() {
  }

}
