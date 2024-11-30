import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { AdviceComponent} from './advice/advice.component';
import { PainManagementComponent } from './painmanagement/painmanagement.component';


const routes: Routes = [
  { path: '', component: HeaderComponent},
  { path: '', component:HomeComponent},
  { path: 'contact', component:ContactComponent },
  {path:'services',component:ServicesComponent},
  {path:"doctors",component:DoctorsComponent},{ path: 'chatbot', component:ChatbotComponent},  // Route vers le chatbot
  { path: 'treatments', component:TreatmentsComponent },  // Route vers les traitements
  { path: 'advice', component: AdviceComponent },  // Route vers les conseils
  { path: 'painmanagement', component:PainManagementComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
