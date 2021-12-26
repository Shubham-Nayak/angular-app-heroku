import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListQuestionnaireComponent } from './questionnaire/list-questionnaire/list-questionnaire.component';
import { AddQuestionnaireComponent } from './questionnaire/add-questionnaire/add-questionnaire.component';

import { ListCertificateComponent } from './certificates/list-certificate/list-certificate.component';
import { AddCertificateComponent } from './certificates/add-certificate/add-certificate.component';

import { DashboardComponent } from './layout/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'questionnaire', component: ListQuestionnaireComponent },
  { path: 'add-questionnaire', component: AddQuestionnaireComponent },
  { path: 'certificate', component: ListCertificateComponent },
  { path: 'add-certificate', component: AddCertificateComponent },
  
  { path: '', component: DashboardComponent },
  { path: 'home', component: DashboardComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
