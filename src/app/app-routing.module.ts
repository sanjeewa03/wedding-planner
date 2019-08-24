import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InquiryComponent } from './otherComponents/inquiry/inquiry.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'inquiry', component: InquiryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
