import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListQuestionnaireComponent } from './questionnaire/list-questionnaire/list-questionnaire.component';
import { AddQuestionnaireComponent } from './questionnaire/add-questionnaire/add-questionnaire.component';



const routes: Routes = [
  { path: 'questionnaire', component: ListQuestionnaireComponent },
  { path: 'add-questionnaire', component: AddQuestionnaireComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
